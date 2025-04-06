export default function VerticalNavbar() {
    return (
      <nav className="w-48 h-screen bg-gray-800 text-white p-4 flex flex-col space-y-4">
        <a href="/" className="hover:bg-gray-700 p-2 rounded">Dashboard</a>
        <a href="/profile" className="hover:bg-gray-700 p-2 rounded">Profile</a>
        <a href="/settings" className="hover:bg-gray-700 p-2 rounded">Settings</a>
      </nav>
    );
  }
  