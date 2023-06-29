export default function Footer () {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p><a href="https://github.com/lomokwa" rel="noreffer">GitHub Repo</a></p>
      <p>&copy;{currentYear} Lorenzo Mokwa</p>
    </footer>
  );
}
