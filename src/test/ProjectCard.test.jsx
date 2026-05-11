import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ProjectCard from '../components/ProjectCard';

vi.mock('framer-motion', () => ({
    motion: {
        div: ({ children, ...props }) => {
            // Strip framer-specific props before passing to DOM
            const { whileHover, whileTap, initial, animate, exit, transition, ...domProps } = props;
            return <div {...domProps}>{children}</div>;
        },
    },
    AnimatePresence: ({ children }) => <>{children}</>,
}));

const baseProps = {
    icon: <span data-testid="card-icon">🛒</span>,
    title: 'Carrefour Spain',
    subtitle: 'Technical Lead & Mentorship',
    description: 'Leading technical delivery and architecture for the Carrefour App in Spain.',
    metrics: ['13M Active Users', 'MVI Pipeline', 'Mentoring 3 engineers'],
    tags: ['Kotlin', 'Jetpack Compose'],
    clickable: false,
    onReadMore: vi.fn(),
};

describe('ProjectCard', () => {

    // ── Rendering ──────────────────────────────────────────────────────────────

    it('renders the title', () => {
        render(<ProjectCard {...baseProps} />);
        expect(screen.getByText('Carrefour Spain')).toBeInTheDocument();
    });

    it('renders the subtitle', () => {
        render(<ProjectCard {...baseProps} />);
        expect(screen.getByText('Technical Lead & Mentorship')).toBeInTheDocument();
    });

    it('renders the description', () => {
        render(<ProjectCard {...baseProps} />);
        expect(screen.getByText(/Leading technical delivery/)).toBeInTheDocument();
    });

    it('renders all metric items', () => {
        render(<ProjectCard {...baseProps} />);
        expect(screen.getByText('13M Active Users')).toBeInTheDocument();
        expect(screen.getByText('MVI Pipeline')).toBeInTheDocument();
        expect(screen.getByText('Mentoring 3 engineers')).toBeInTheDocument();
    });

    it('does not render metrics section when metrics array is empty', () => {
        render(<ProjectCard {...baseProps} metrics={[]} />);
        expect(screen.queryByText('13M Active Users')).not.toBeInTheDocument();
    });

    it('does not render "Read More" when clickable is false', () => {
        render(<ProjectCard {...baseProps} clickable={false} />);
        expect(screen.queryByText(/Read More/)).not.toBeInTheDocument();
    });

    it('renders "Read More" when clickable is true', () => {
        render(<ProjectCard {...baseProps} clickable={true} />);
        expect(screen.getByText(/Read More/)).toBeInTheDocument();
    });

    // ── Accessibility ──────────────────────────────────────────────────────────

    it('has role="button" when clickable is true', () => {
        render(<ProjectCard {...baseProps} clickable={true} />);
        expect(screen.getByRole('button', { name: /View details for Carrefour Spain/ })).toBeInTheDocument();
    });

    it('does not have role="button" when clickable is false', () => {
        render(<ProjectCard {...baseProps} clickable={false} />);
        expect(screen.queryByRole('button')).not.toBeInTheDocument();
    });

    it('has tabIndex=0 when clickable', () => {
        render(<ProjectCard {...baseProps} clickable={true} />);
        const card = screen.getByRole('button');
        expect(card).toHaveAttribute('tabindex', '0');
    });

    it('has descriptive aria-label when clickable', () => {
        render(<ProjectCard {...baseProps} clickable={true} />);
        const card = screen.getByRole('button');
        expect(card).toHaveAttribute('aria-label', 'View details for Carrefour Spain');
    });

    // ── Interactions ──────────────────────────────────────────────────────────

    it('calls onReadMore when clicked', async () => {
        const onReadMore = vi.fn();
        const user = userEvent.setup();
        render(<ProjectCard {...baseProps} clickable={true} onReadMore={onReadMore} />);
        await user.click(screen.getByRole('button'));
        expect(onReadMore).toHaveBeenCalledTimes(1);
    });

    it('calls onReadMore when Enter key is pressed', async () => {
        const onReadMore = vi.fn();
        const user = userEvent.setup();
        render(<ProjectCard {...baseProps} clickable={true} onReadMore={onReadMore} />);
        const card = screen.getByRole('button');
        card.focus();
        await user.keyboard('{Enter}');
        expect(onReadMore).toHaveBeenCalledTimes(1);
    });

    it('calls onReadMore when Space key is pressed', async () => {
        const onReadMore = vi.fn();
        const user = userEvent.setup();
        render(<ProjectCard {...baseProps} clickable={true} onReadMore={onReadMore} />);
        const card = screen.getByRole('button');
        card.focus();
        await user.keyboard(' ');
        expect(onReadMore).toHaveBeenCalledTimes(1);
    });

    it('does NOT call onReadMore when card is not clickable', async () => {
        const onReadMore = vi.fn();
        const user = userEvent.setup();
        render(<ProjectCard {...baseProps} clickable={false} onReadMore={onReadMore} />);
        // The card is a plain div, not a button — we query by text instead
        await user.click(screen.getByText('Carrefour Spain'));
        expect(onReadMore).not.toHaveBeenCalled();
    });
});
