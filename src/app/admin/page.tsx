'use client';

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { useState } from 'react';
import { IconEdit, IconTrash, IconPlus, IconUsers, IconDashboard, IconSettings } from '@tabler/icons-react';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  type: 'program' | 'impact' | 'story';
  createdAt: Date;
}

interface AdminUser {
  id: string;
  username: string;
  role: 'admin' | 'editor';
  createdAt: Date;
}

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState<'dashboard' | 'content' | 'users' | 'settings'>('dashboard');
  const [loginForm, setLoginForm] = useState({
    username: '',
    password: ''
  });
  const [contents, setContents] = useState<ContentItem[]>([]);
  const [users, setUsers] = useState<AdminUser[]>([]);
  const [isAddingContent, setIsAddingContent] = useState(false);
  const [isAddingUser, setIsAddingUser] = useState(false);
  const [newContent, setNewContent] = useState<{
    title: string;
    description: string;
    type: 'program' | 'impact' | 'story';
  }>({
    title: '',
    description: '',
    type: 'program'
  });
  const [newUser, setNewUser] = useState<{
    username: string;
    password: string;
    role: 'admin' | 'editor';
  }>({
    username: '',
    password: '',
    role: 'editor'
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // For demonstration, using hardcoded credentials
    // In production, this should be replaced with proper authentication
    if (loginForm.username === 'admin' && loginForm.password === 'admin123') {
      setIsAuthenticated(true);
    } else {
      alert('Invalid credentials');
    }
  };

  const handleAddContent = (e: React.FormEvent) => {
    e.preventDefault();
    const contentItem: ContentItem = {
      id: Date.now().toString(),
      ...newContent,
      createdAt: new Date()
    };
    setContents([contentItem, ...contents]);
    setIsAddingContent(false);
    setNewContent({ title: '', description: '', type: 'program' });
  };

  const handleDeleteContent = (id: string) => {
    setContents(contents.filter(content => content.id !== id));
  };

  const handleAddUser = (e: React.FormEvent) => {
    e.preventDefault();
    const user: AdminUser = {
      id: Date.now().toString(),
      username: newUser.username,
      role: newUser.role,
      createdAt: new Date()
    };
    setUsers([user, ...users]);
    setIsAddingUser(false);
    setNewUser({ username: '', password: '', role: 'editor' });
  };

  if (!isAuthenticated) {
    return (
      <div className="bg-gradient-to-b from-[#B790CF] via-[#9A7AAD] to-[#7D648B] min-h-screen">
        <Header />
        <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md mx-auto">
            <div className="bg-white rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-[#2F4160] mb-6">Admin Login</h2>
              <form onSubmit={handleLogin} className="space-y-6">
                <div>
                  <label className="block text-[#2F4160] mb-2">Username</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-lg bg-white border border-gray-300 text-black"
                    value={loginForm.username}
                    onChange={(e) => setLoginForm({...loginForm, username: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-[#2F4160] mb-2">Password</label>
                  <input
                    type="password"
                    className="w-full px-4 py-2 rounded-lg bg-white border border-gray-300 text-black"
                    value={loginForm.password}
                    onChange={(e) => setLoginForm({...loginForm, password: e.target.value})}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#B790CF] hover:bg-[#9A7AAD] text-white px-6 py-2 rounded-lg"
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-b from-[#B790CF] via-[#9A7AAD] to-[#7D648B] min-h-screen">
      <Header />
      
      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Admin Navigation */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 mb-8">
            <nav className="flex space-x-4">
              <button
                onClick={() => setActiveTab('dashboard')}
                className={`flex items-center px-4 py-2 rounded-lg ${
                  activeTab === 'dashboard' ? 'bg-white/20 text-white' : 'text-white/80 hover:bg-white/10'
                }`}
              >
                <IconDashboard className="mr-2" size={20} />
                Dashboard
              </button>
              <button
                onClick={() => setActiveTab('content')}
                className={`flex items-center px-4 py-2 rounded-lg ${
                  activeTab === 'content' ? 'bg-white/20 text-white' : 'text-white/80 hover:bg-white/10'
                }`}
              >
                <IconEdit className="mr-2" size={20} />
                Content
              </button>
              <button
                onClick={() => setActiveTab('users')}
                className={`flex items-center px-4 py-2 rounded-lg ${
                  activeTab === 'users' ? 'bg-white/20 text-white' : 'text-white/80 hover:bg-white/10'
                }`}
              >
                <IconUsers className="mr-2" size={20} />
                Users
              </button>
              <button
                onClick={() => setActiveTab('settings')}
                className={`flex items-center px-4 py-2 rounded-lg ${
                  activeTab === 'settings' ? 'bg-white/20 text-white' : 'text-white/80 hover:bg-white/10'
                }`}
              >
                <IconSettings className="mr-2" size={20} />
                Settings
              </button>
            </nav>
          </div>

          {/* Dashboard Tab */}
          {activeTab === 'dashboard' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-white mb-2">Total Content</h3>
                <p className="text-3xl font-bold text-white">{contents.length}</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-white mb-2">Total Users</h3>
                <p className="text-3xl font-bold text-white">{users.length}</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-white mb-2">Recent Activity</h3>
                <p className="text-white/80">Last login: {new Date().toLocaleDateString()}</p>
              </div>
            </div>
          )}

          {/* Content Tab */}
          {activeTab === 'content' && (
            <>
              <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold text-white">Content Management</h1>
                <button
                  onClick={() => setIsAddingContent(true)}
                  className="bg-[#B790CF] hover:bg-[#9A7AAD] text-white px-4 py-2 rounded-lg flex items-center"
                >
                  <IconPlus className="mr-2" size={20} />
                  Add New Content
                </button>
              </div>

              {isAddingContent && (
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
                  <h2 className="text-2xl font-bold text-white mb-6">Add New Content</h2>
                  <form onSubmit={handleAddContent} className="space-y-6">
                    <div>
                      <label className="block text-white mb-2">Title</label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/20 text-white"
                        value={newContent.title}
                        onChange={(e) => setNewContent({...newContent, title: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-white mb-2">Description</label>
                      <textarea
                        rows={4}
                        className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/20 text-white"
                        value={newContent.description}
                        onChange={(e) => setNewContent({...newContent, description: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-white mb-2">Type</label>
                      <select
                        className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/20 text-white"
                        value={newContent.type}
                        onChange={(e) => setNewContent({
                          ...newContent,
                          type: e.target.value as 'program' | 'impact' | 'story'
                        })}
                      >
                        <option value="program">Program</option>
                        <option value="impact">Impact</option>
                        <option value="story">Story</option>
                      </select>
                    </div>
                    <div className="flex space-x-4">
                      <button
                        type="submit"
                        className="bg-[#B790CF] hover:bg-[#9A7AAD] text-white px-6 py-2 rounded-lg"
                      >
                        Save
                      </button>
                      <button
                        type="button"
                        onClick={() => setIsAddingContent(false)}
                        className="bg-white/10 hover:bg-white/20 text-white px-6 py-2 rounded-lg"
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>
              )}

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="space-y-6">
                  {contents.map(content => (
                    <div key={content.id} className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                      <div>
                        <h3 className="text-xl font-semibold text-white">{content.title}</h3>
                        <p className="text-white/80">{content.description}</p>
                        <div className="flex space-x-4 mt-2">
                          <span className="text-sm text-white/60">{content.type}</span>
                          <span className="text-sm text-white/60">
                            {new Date(content.createdAt).toLocaleDateString()}
                          </span>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <button className="p-2 hover:bg-white/10 rounded-full">
                          <IconEdit className="text-white" size={20} />
                        </button>
                        <button 
                          onClick={() => handleDeleteContent(content.id)}
                          className="p-2 hover:bg-white/10 rounded-full"
                        >
                          <IconTrash className="text-white" size={20} />
                        </button>
                      </div>
                    </div>
                  ))}
                  {contents.length === 0 && (
                    <div className="text-center text-white/60 py-8">
                      {"No content items yet. Click \"Add New Content\" to get started."}
                    </div>
                  )}
                </div>
              </div>
            </>
          )}

          {/* Users Tab */}
          {activeTab === 'users' && (
            <>
              <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold text-white">User Management</h1>
                <button
                  onClick={() => setIsAddingUser(true)}
                  className="bg-[#B790CF] hover:bg-[#9A7AAD] text-white px-4 py-2 rounded-lg flex items-center"
                >
                  <IconPlus className="mr-2" size={20} />
                  Add New User
                </button>
              </div>

              {isAddingUser && (
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
                  <h2 className="text-2xl font-bold text-white mb-6">Add New User</h2>
                  <form onSubmit={handleAddUser} className="space-y-6">
                    <div>
                      <label className="block text-white mb-2">Username</label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/20 text-white"
                        value={newUser.username}
                        onChange={(e) => setNewUser({...newUser, username: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-white mb-2">Password</label>
                      <input
                        type="password"
                        className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/20 text-white"
                        value={newUser.password}
                        onChange={(e) => setNewUser({...newUser, password: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-white mb-2">Role</label>
                      <select
                        className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/20 text-white"
                        value={newUser.role}
                        onChange={(e) => setNewUser({
                          ...newUser,
                          role: e.target.value as 'admin' | 'editor'
                        })}
                      >
                        <option value="editor">Editor</option>
                        <option value="admin">Admin</option>
                      </select>
                    </div>
                    <div className="flex space-x-4">
                      <button
                        type="submit"
                        className="bg-[#B790CF] hover:bg-[#9A7AAD] text-white px-6 py-2 rounded-lg"
                      >
                        Save
                      </button>
                      <button
                        type="button"
                        onClick={() => setIsAddingUser(false)}
                        className="bg-white/10 hover:bg-white/20 text-white px-6 py-2 rounded-lg"
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>
              )}

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="space-y-6">
                  {users.map(user => (
                    <div key={user.id} className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                      <div>
                        <h3 className="text-xl font-semibold text-white">{user.username}</h3>
                        <div className="flex space-x-4 mt-2">
                          <span className="text-sm text-white/60">{user.role}</span>
                          <span className="text-sm text-white/60">
                            {new Date(user.createdAt).toLocaleDateString()}
                          </span>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <button className="p-2 hover:bg-white/10 rounded-full">
                          <IconEdit className="text-white" size={20} />
                        </button>
                        <button 
                          onClick={() => setUsers(users.filter(u => u.id !== user.id))}
                          className="p-2 hover:bg-white/10 rounded-full"
                        >
                          <IconTrash className="text-white" size={20} />
                        </button>
                      </div>
                    </div>
                  ))}
                  {users.length === 0 && (
                    <div className="text-center text-white/60 py-8">
                      {'No users yet. Click "Add New User" to get started.'}
                    </div>
                  )}
                </div>
              </div>
            </>
          )}

          {/* Settings Tab */}
          {activeTab === 'settings' && (
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Settings</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-white mb-2">Site Title</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/20 text-white"
                    placeholder="Nyayo"
                  />
                </div>
                <div>
                  <label className="block text-white mb-2">Site Description</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/20 text-white"
                    placeholder="Empowering women and girls in Tanzania..."
                  />
                </div>
                <button
                  className="bg-[#B790CF] hover:bg-[#9A7AAD] text-white px-6 py-2 rounded-lg"
                >
                  Save Settings
                </button>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}