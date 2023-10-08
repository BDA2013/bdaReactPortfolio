const currentYear = new Date().getFullYear();

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <span className="text-muted">© {currentYear} Brandon Alexander</span>
            </div>
        </footer>
    );
}