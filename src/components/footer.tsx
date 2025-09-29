export function Footer() {
  return (
    <footer className="w-full bg-secondary text-secondary-foreground border-t">
      <div className="container p-6 text-center text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Credence Africa. All rights reserved.</p>
      </div>
    </footer>
  );
}
