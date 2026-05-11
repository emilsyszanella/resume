import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ProjectModal from '../components/ProjectModal';

// Framer Motion uses JSDOM-incompatible animations — mock it
vi.mock('framer-motion', () => ({
    motion: {
        div: ({ children, ...props }) => <div {...props}>{children}</div>,
    },
    AnimatePresence: ({ children }) => <>{children}</>,
}));

const mockData = {
    icon: <span data-testid="modal-icon">📱</span>,
    title: 'Carrefour Spain',
    subtitle: 'Technical Lead · Android Architecture',
    hook: 'Took technical ownership of the Carrefour Spain Android app — serving 13M users.',
    context: [
        'App serving 13M active users in Spain.',
        'Inherited a legacy codebase with no architectural standards.',
    ],
    challenge: 'Migrating a live codebase to MVI + Jetpack Compose without regressions.',
    approach: [
        'Defined an incremental migration strategy — feature-by-feature.',
        'Introduced TDD as a mandatory engineering standard.',
    ],
    metrics: [
        '13M active users served without a single regression.',
        'MVI + Compose pipeline fully architected.',
    ],
    tags: [
        { label: 'Kotlin', category: 'Language' },
        { label: 'MVI Architecture', category: 'Architecture' },
        { label: 'CI/CD', category: 'DevOps' },
    ],
    link: null,
};

describe('ProjectModal', () => {
    const onClose = vi.fn();

    beforeEach(() => {
        onClose.mockClear();
        document.body.style.overflow = '';
    });

    // ── Rendering ──────────────────────────────────────────────────────────────

    it('does not render when isOpen is false', () => {
        render(<ProjectModal isOpen={false} onClose={onClose} data={mockData} />);
        expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });

    it('renders the dialog when isOpen is true', () => {
        render(<ProjectModal isOpen={true} onClose={onClose} data={mockData} />);
        expect(screen.getByRole('dialog')).toBeInTheDocument();
    });

    it('renders the project title', () => {
        render(<ProjectModal isOpen={true} onClose={onClose} data={mockData} />);
        expect(screen.getByText('Carrefour Spain')).toBeInTheDocument();
    });

    it('renders the subtitle', () => {
        render(<ProjectModal isOpen={true} onClose={onClose} data={mockData} />);
        expect(screen.getByText('Technical Lead · Android Architecture')).toBeInTheDocument();
    });

    it('renders the hook (impact statement)', () => {
        render(<ProjectModal isOpen={true} onClose={onClose} data={mockData} />);
        expect(screen.getByText(/Took technical ownership/)).toBeInTheDocument();
    });

    it('renders all context bullet points', () => {
        render(<ProjectModal isOpen={true} onClose={onClose} data={mockData} />);
        expect(screen.getByText('App serving 13M active users in Spain.')).toBeInTheDocument();
        expect(screen.getByText('Inherited a legacy codebase with no architectural standards.')).toBeInTheDocument();
    });

    it('renders the challenge section', () => {
        render(<ProjectModal isOpen={true} onClose={onClose} data={mockData} />);
        expect(screen.getByText(/Migrating a live codebase/)).toBeInTheDocument();
    });

    it('renders all approach items with arrow markers', () => {
        render(<ProjectModal isOpen={true} onClose={onClose} data={mockData} />);
        expect(screen.getByText(/Defined an incremental migration strategy/)).toBeInTheDocument();
        expect(screen.getByText(/Introduced TDD/)).toBeInTheDocument();
    });

    it('renders all impact metrics with check icons', () => {
        render(<ProjectModal isOpen={true} onClose={onClose} data={mockData} />);
        expect(screen.getByText('13M active users served without a single regression.')).toBeInTheDocument();
        expect(screen.getByText('MVI + Compose pipeline fully architected.')).toBeInTheDocument();
    });

    it('renders technology tags grouped by category', () => {
        render(<ProjectModal isOpen={true} onClose={onClose} data={mockData} />);
        expect(screen.getByText('Kotlin')).toBeInTheDocument();
        expect(screen.getByText('MVI Architecture')).toBeInTheDocument();
        expect(screen.getByText('CI/CD')).toBeInTheDocument();
        // Category labels
        expect(screen.getByText('Language')).toBeInTheDocument();
        expect(screen.getByText('Architecture')).toBeInTheDocument();
        expect(screen.getByText('DevOps')).toBeInTheDocument();
    });

    it('does not render external link button when link is null', () => {
        render(<ProjectModal isOpen={true} onClose={onClose} data={mockData} />);
        expect(screen.queryByRole('link', { name: /View Project/ })).not.toBeInTheDocument();
    });

    it('renders external link button when link is provided', () => {
        const dataWithLink = { ...mockData, link: 'https://play.google.com', linkLabel: 'View on Play Store' };
        render(<ProjectModal isOpen={true} onClose={onClose} data={dataWithLink} />);
        const link = screen.getByRole('link', { name: /View on Play Store/ });
        expect(link).toBeInTheDocument();
        expect(link).toHaveAttribute('href', 'https://play.google.com');
        expect(link).toHaveAttribute('target', '_blank');
        expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });

    // ── Accessibility ──────────────────────────────────────────────────────────

    it('has correct ARIA role and modal attributes', () => {
        render(<ProjectModal isOpen={true} onClose={onClose} data={mockData} />);
        const dialog = screen.getByRole('dialog');
        expect(dialog).toHaveAttribute('aria-modal', 'true');
        expect(dialog).toHaveAttribute('aria-labelledby', 'modal-title');
    });

    it('close button has an accessible label', () => {
        render(<ProjectModal isOpen={true} onClose={onClose} data={mockData} />);
        expect(screen.getByRole('button', { name: /close modal/i })).toBeInTheDocument();
    });

    // ── Interactions ──────────────────────────────────────────────────────────

    it('calls onClose when close button is clicked', async () => {
        const user = userEvent.setup();
        render(<ProjectModal isOpen={true} onClose={onClose} data={mockData} />);
        await user.click(screen.getByRole('button', { name: /close modal/i }));
        expect(onClose).toHaveBeenCalledTimes(1);
    });

    it('calls onClose when Escape key is pressed', () => {
        render(<ProjectModal isOpen={true} onClose={onClose} data={mockData} />);
        fireEvent.keyDown(document, { key: 'Escape' });
        expect(onClose).toHaveBeenCalledTimes(1);
    });

    it('locks body scroll when modal opens', () => {
        render(<ProjectModal isOpen={true} onClose={onClose} data={mockData} />);
        expect(document.body.style.overflow).toBe('hidden');
    });

    it('returns null when data is null', () => {
        const { container } = render(<ProjectModal isOpen={true} onClose={onClose} data={null} />);
        expect(container.firstChild).toBeNull();
    });
});
