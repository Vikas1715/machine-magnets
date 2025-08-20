import React, { useState, useEffect } from 'react';
import { ChevronDown, Mail, Instagram, MessageCircle, Users, Calendar, Trophy, Target, Menu, X } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  quote?: string;
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [showAllManagement, setShowAllManagement] = useState(false);
  const [showAllResearch, setShowAllResearch] = useState(false);
  const [showAllTech, setShowAllTech] = useState(false);
  const [showAllSocialMedia, setShowAllSocialMedia] = useState(false);
  const [showAllOutreach, setShowAllOutreach] = useState(false);
  const [showAllContent, setShowAllContent] = useState(false);
  const [showAllUdbhavPhotos, setShowAllUdbhavPhotos] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const leadership: TeamMember[] = [
    { name: 'Dr. Raju ', role: 'Head of Department', image: '/Mr.Raju.jpeg', quote: 'Events like these exemplify the spirit of innovation and inquiry in the field of AI and ML, enabling students to translate knowledge into impactful solutions.' },
    { name: 'Ms. Aarushi Thusu', role: 'Faculty Coordinator', image: '/Ms.Aarushi.jpeg', quote: 'Guiding minds towards technological excellence' },
    { name: 'Ms. Sonia Arora', role: 'Faculty Mentor', image: '/Ms.Sonia.jpeg', quote: 'Empowering students to reach their full potential' },
    { name: 'Ms. Shweta', role: 'Faculty Mentor', image: '/Ms.Shweta.jpeg', quote: 'Nurturing innovation through knowledge and wisdom' },
    { name: 'Mr. Saurabh Namdev', role: 'Faculty Mentor', image: '/Mr.Saurabh.jpeg', quote: 'Bridging theory and practical application' },
    { name: 'Lavish Agrahari', role: 'President', image: '/Lavish.jpeg', quote: 'Leading the charge towards AI revolution' },
    { name: 'Ayush Jaiswal', role: 'Vice-President', image: '/Ayush.jpeg', quote: 'Transforming visions into reality' }
  ];

  const coreTeam: TeamMember[] = [
    // Management Team
    { name: 'Anant Tiwari', role: 'Management Team', image: '/Anant.jpeg', quote: 'Leading with vision, managing with precision' },
    { name: 'Prateek Yadav', role: 'Management Team', image: '/Prateek.png', quote: 'Turning ideas into actionable strategies' },
    { name: 'Dhruv Paliwal', role: 'Management Team', image: '/Dhruv Paliwal.jpeg', quote: 'Excellence is not a skill, it\'s an attitude' },
    { name: 'Priyanshu Singh', role: 'Management Team', image: '/Priyanshu.jpg', quote: 'A visionary leader who inspires confidence and creativity in every step taken.' },
    { name: 'Vaibhav Kumar', role: 'Management Team', image: '/Vaibhav.PNG', quote: 'A disciplined force who turns plans into reality with responsibility and dedication.' },
    // Research Team
    { name: 'Pragya Srivastava', role: 'Research Team', image: '/Pragya1.jpeg', quote: 'Exploring the frontiers of AI innovation' },
    { name: 'Nishtha Dubey', role: 'Research Team', image: '/Nishtha.jpeg', quote: 'Data tells stories, research reveals truths' },
    
    // Tech Team
    { name: 'Namrata Aggarwal', role: 'Tech Team', image: '/Namrata.jpeg', quote: 'Code is poetry written in logic' },
    { name: 'Dhruv Saxena', role: 'Tech Team', image: '/Dhruv Saxena.jpg', quote: 'Building tomorrow\'s solutions today' },
    
    // Social Media Team
    { name: 'Arpit Prajapati', role: 'Social Media Team', image: '/Arpit.jpeg', quote: 'Connecting minds through digital storytelling' },
    { name: 'Priyansh ', role: 'Social Media Team', image: '/Priyansh.jpg', quote: 'Creating viral moments from brilliant ideas' },
    
    // Outreach Team
    { name: 'Prakhar Praveen', role: 'Outreach Team', image: '/Prakhar.jpeg', quote: 'Building bridges between innovation and community' },
    
    // Content Team
    { name: 'Himani Patel', role: 'Content Team', image: '/Himani.jpeg', quote: 'Crafting words that inspire and educate' }
  ];

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const TeamCard: React.FC<{ member: TeamMember; index: number }> = ({ member, index }) => (
    <div 
      className="group bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 hover:border-red-200"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="relative mb-6">
        <div className="w-40 h-48 mx-auto rounded-xl overflow-hidden ring-4 ring-red-100 group-hover:ring-red-300 transition-all duration-300 shadow-md">
          <img 
            src={member.image} 
            alt={member.name}
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
            onError={(e) => {
              (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=b91c1c&color=fff&size=320&format=png`;
            }}
          />
        </div>
        {member.role.includes('President') || member.role.includes('Coordinator') || member.role.includes('Head') ? (
          <div className="absolute -top-2 -right-2 bg-gradient-to-r from-red-600 to-red-700 text-white text-xs px-2 py-1 rounded-full shadow-lg">
            <Trophy className="w-3 h-3 inline mr-1" />
            Leader
          </div>
        ) : null}
      </div>
      
      <div className="text-center">
        <h3 className="font-bold text-gray-800 text-lg mb-2 group-hover:text-red-600 transition-colors duration-300">
          {member.name}
        </h3>
        <div className="bg-gradient-to-r from-red-50 to-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
          {member.role}
        </div>
        
        {member.quote && (
          <p className="text-gray-500 text-sm italic mb-4 transition-opacity duration-300">
            "{member.quote}"
          </p>
        )}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white/80 backdrop-blur-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-red-600 to-red-700 rounded-full flex items-center justify-center">
                <img 
                  src="/Club logo.jpeg" 
                  alt="Machine Magnets Logo"
                  className="w-8 h-8 rounded-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                    e.currentTarget.innerHTML = '<div class="text-white font-bold text-sm">MM</div>';
                  }}
                />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
                Machine Magnets
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['About', 'Leadership', 'Team', 'Events', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-gray-700 hover:text-red-600 font-medium transition-colors duration-300 relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}
            </div>

            {/* NIET Logo */}
            <div className="hidden md:flex items-center">
              <div className="w-28 h-12 rounded-lg flex items-center justify-center shadow-md border border-gray-200">
                <img 
                  src="/image.png" 
                  alt="NIET Logo"
                  className="w-24 h-10 object-contain"
                  style={{ filter: 'none' }}
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                    e.currentTarget.innerHTML = '<div style="color: black; font-weight: bold; font-size: 14px;"><span style="color: #dc2626;">N</span>IET</div>';
                  }}
                />
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-700 hover:text-red-600 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t border-gray-100 py-4 animate-in slide-in-from-top duration-300">
              {['About', 'Leadership', 'Team', 'Events', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left px-4 py-3 text-gray-700 hover:text-red-600 hover:bg-red-50 transition-all duration-300"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-white to-red-50"></div>
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-red-200 rounded-full opacity-20 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            ></div>
          ))}
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="mb-8 animate-in fade-in-0 slide-in-from-bottom-4 duration-1000">
            <div className="inline-flex items-center space-x-2 bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Target className="w-4 h-4" />
              <span>AI & ML Community</span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-200">
            <span className="bg-gradient-to-r from-red-600 via-red-700 to-red-800 bg-clip-text text-transparent">
              Machine Magnets
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-500">
            A student-driven community exploring AI & ML through events, workshops, competitions, and collaborative projects.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-700">
            <button 
              onClick={() => scrollToSection('about')}
              className="bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-full font-semibold hover:from-red-700 hover:to-red-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-red-200"
            >
              Discover More
            </button>
            <button 
              onClick={() => scrollToSection('team')}
              className="border-2 border-red-600 text-red-600 px-8 py-4 rounded-full font-semibold hover:bg-red-600 hover:text-white transition-all duration-300"
            >
              Meet the Team
            </button>
          </div>
        </div>
        
        <button 
          onClick={() => scrollToSection('about')}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hover:text-red-800 transition-colors duration-300"
        >
          <ChevronDown className="w-6 h-6 text-red-600" />
        </button>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            About <span className="text-red-600">Machine Magnets</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-700 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Machine Magnets empowers students with hands-on AI/ML exposure. We host hackathons, coding sprints, idea pitches, and fun activities to make learning engaging and practical.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {[
            { icon: Users, title: 'Community Driven', desc: 'Built by students, for students' },
            { icon: Trophy, title: 'Competitions', desc: 'Regular hackathons and coding challenges' },
            { icon: Target, title: 'Practical Learning', desc: 'Hands-on workshops and projects' }
          ].map((feature, index) => (
            <div key={index} className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-red-200 group">
              <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-red-700 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Leadership Section */}
      <section id="leadership" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-red-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Our <span className="text-red-600">Leadership</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-700 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Meet the dedicated faculty and student leaders guiding Machine Magnets towards excellence
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 animate-in fade-in-0 slide-in-from-bottom-4 duration-1000">
            {leadership.map((member, index) => (
              <TeamCard key={index} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Core Team Section */}
      <section id="team" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Core <span className="text-red-600">Team</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-700 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Specialized teams working together to drive innovation and foster growth in our AI/ML community
            </p>
          </div>

          {/* Management Team */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Management Team</h3>
              <div className="w-16 h-0.5 bg-red-600 mx-auto mb-4"></div>
              <p className="text-gray-600">Strategic leadership and organizational excellence</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {coreTeam.filter(member => member.role === 'Management Team')
                .slice(0, showAllManagement ? undefined : 4)
                .map((member, index) => (
                <TeamCard key={index} member={member} index={index} />
              ))}
            </div>
            {coreTeam.filter(member => member.role === 'Management Team').length > 4 && (
              <div className="text-center mt-6">
                <button
                  onClick={() => setShowAllManagement(!showAllManagement)}
                  className="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-2 rounded-full font-medium hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-lg hover:shadow-red-200"
                >
                  {showAllManagement ? 'Show Less' : 'Show More'}
                </button>
              </div>
            )}
          </div>

          {/* Research Team */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Research Team</h3>
              <div className="w-16 h-0.5 bg-red-600 mx-auto mb-4"></div>
              <p className="text-gray-600">Exploring cutting-edge AI/ML innovations</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {coreTeam.filter(member => member.role === 'Research Team')
                .slice(0, showAllResearch ? undefined : 2)
                .map((member, index) => (
                <TeamCard key={index} member={member} index={index} />
              ))}
            </div>
            {coreTeam.filter(member => member.role === 'Research Team').length > 2 && (
              <div className="text-center mt-6">
                <button
                  onClick={() => setShowAllResearch(!showAllResearch)}
                  className="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-2 rounded-full font-medium hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-lg hover:shadow-red-200"
                >
                  {showAllResearch ? 'Show Less' : 'Show More'}
                </button>
              </div>
            )}
          </div>

          {/* Tech Team */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Technical Team</h3>
              <div className="w-16 h-0.5 bg-red-600 mx-auto mb-4"></div>
              <p className="text-gray-600">Building robust technical solutions</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {coreTeam.filter(member => member.role === 'Tech Team')
                .slice(0, showAllTech ? undefined : 2)
                .map((member, index) => (
                <TeamCard key={index} member={member} index={index} />
              ))}
            </div>
            {coreTeam.filter(member => member.role === 'Tech Team').length > 2 && (
              <div className="text-center mt-6">
                <button
                  onClick={() => setShowAllTech(!showAllTech)}
                  className="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-2 rounded-full font-medium hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-lg hover:shadow-red-200"
                >
                  {showAllTech ? 'Show Less' : 'Show More'}
                </button>
              </div>
            )}
          </div>

          {/* Social Media Team */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Social Media Team</h3>
              <div className="w-16 h-0.5 bg-red-600 mx-auto mb-4"></div>
              <p className="text-gray-600">Amplifying our voice across digital platforms</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {coreTeam.filter(member => member.role === 'Social Media Team')
                .slice(0, showAllSocialMedia ? undefined : 2)
                .map((member, index) => (
                <TeamCard key={index} member={member} index={index} />
              ))}
            </div>
            {coreTeam.filter(member => member.role === 'Social Media Team').length > 2 && (
              <div className="text-center mt-6">
                <button
                  onClick={() => setShowAllSocialMedia(!showAllSocialMedia)}
                  className="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-2 rounded-full font-medium hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-lg hover:shadow-red-200"
                >
                  {showAllSocialMedia ? 'Show Less' : 'Show More'}
                </button>
              </div>
            )}
          </div>

          {/* Outreach Team */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Outreach Team</h3>
              <div className="w-16 h-0.5 bg-red-600 mx-auto mb-4"></div>
              <p className="text-gray-600">Connecting with the broader community</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {coreTeam.filter(member => member.role === 'Outreach Team')
                .slice(0, showAllOutreach ? undefined : 1)
                .map((member, index) => (
                <TeamCard key={index} member={member} index={index} />
              ))}
            </div>
            {coreTeam.filter(member => member.role === 'Outreach Team').length > 1 && (
              <div className="text-center mt-6">
                <button
                  onClick={() => setShowAllOutreach(!showAllOutreach)}
                  className="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-2 rounded-full font-medium hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-lg hover:shadow-red-200"
                >
                  {showAllOutreach ? 'Show Less' : 'Show More'}
                </button>
              </div>
            )}
          </div>

          {/* Content Team */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Content Team</h3>
              <div className="w-16 h-0.5 bg-red-600 mx-auto mb-4"></div>
              <p className="text-gray-600">Creating engaging educational content</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {coreTeam.filter(member => member.role === 'Content Team')
                .slice(0, showAllContent ? undefined : 2)
                .map((member, index) => (
                <TeamCard key={index} member={member} index={index} />
              ))}
            </div>
            {coreTeam.filter(member => member.role === 'Content Team').length > 2 && (
              <div className="text-center mt-6">
                <button
                  onClick={() => setShowAllContent(!showAllContent)}
                  className="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-2 rounded-full font-medium hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-lg hover:shadow-red-200"
                >
                  {showAllContent ? 'Show Less' : 'Show More'}
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-red-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Our <span className="text-red-600">Events</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-700 mx-auto mb-8"></div>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-red-200">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-red-700 rounded-full flex items-center justify-center mr-4">
                  <Trophy className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">🚀 Udbhav: The Rise of Machine Magnets</h3>
              </div>
              <p className="text-gray-600 mb-4">Successfully launched our AI/ML community with great enthusiasm!</p>
              <div className={`grid grid-cols-2 md:grid-cols-3 gap-4 mt-6 ${!showAllUdbhavPhotos ? 'max-h-64 overflow-hidden' : ''}`}>
                {['/udhbav-1.png', '/udhbav-2.png', '/udhbav-3.png', '/udhbav-4.png', '/udhbav-5.png', '/udhbav-6.jpeg']
                  .slice(0, showAllUdbhavPhotos ? undefined : 3)
                  .map((img, idx) => (
                  <div key={idx} className="aspect-square rounded-lg overflow-hidden shadow-md">
                    <img src={img} alt={`Launch ${idx + 1}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" />
                  </div>
                ))}
              </div>
              <div className="text-center mt-4">
                <button
                  onClick={() => setShowAllUdbhavPhotos(!showAllUdbhavPhotos)}
                  className="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-2 rounded-full font-medium hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-lg hover:shadow-red-200"
                >
                  {showAllUdbhavPhotos ? 'Show Less Photos' : 'Show More Photos'}
                </button>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-red-200">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-red-700 rounded-full flex items-center justify-center mr-4">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">🎓 Farewell 2025-Echoes of a Journey</h3>
              </div>
              <p className="text-gray-600 mb-4">A heartfelt farewell celebrating the journey and achievements of our graduating members!</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
                {['/farewell-1.png', '/farewell-2.png', '/farewell-3.png'].map((img, idx) => (
                  <div key={idx} className="aspect-square rounded-lg overflow-hidden shadow-md">
                    <img src={img} alt={`Farewell ${idx + 1}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" />
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-red-200">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-red-700 rounded-full flex items-center justify-center mr-4">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">📅 Upcoming Events</h3>
              </div>
              <div className="space-y-4">
                {['ML MasterChef: Build a Model', 'AI Quiz Blitz', 'Prompt Playground', 'ML Meme War', 'Tech Treasure Hunt(AI Edition)', 'AI Project Expo'].map((event, index) => (
                  <div key={index} className="flex items-center p-4 bg-red-50 rounded-lg hover:bg-red-100 transition-colors duration-300">
                    <div className="w-2 h-2 bg-red-600 rounded-full mr-4"></div>
                    <span className="text-gray-800 font-medium">{event}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Get in <span className="text-red-600">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-700 mx-auto mb-12"></div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <a 
              href="mailto:machine-magnets@niet.co.in"
              className="flex items-center justify-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-red-200 group"
            >
              <Mail className="w-8 h-8 text-red-600 mr-4 group-hover:scale-110 transition-transform duration-300" />
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Email Us</h3>
                <p className="text-gray-600 text-sm">machine-magnets@niet.co.in</p>
              </div>
            </a>
            
            <a 
              href="https://www.instagram.com/machinemagnets"
              className="flex items-center justify-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-red-200 group"
            >
              <Instagram className="w-8 h-8 text-red-600 mr-4 group-hover:scale-110 transition-transform duration-300" />
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Follow Us</h3>
                <p className="text-gray-600 text-sm">@machinemagnets</p>
              </div>
            </a>

            <a 
              href="https://chat.whatsapp.com/F6PwUIO6qU3EFi1HGbCBus"
              className="flex items-center justify-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-red-200 group"
            >
              <MessageCircle className="w-8 h-8 text-red-600 mr-4 group-hover:scale-110 transition-transform duration-300" />
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Join Community</h3>
                <p className="text-gray-600 text-sm">WhatsApp Group</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-red-50 to-red-100 py-12 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <div className="w-10 h-10 bg-gradient-to-r from-red-600 to-red-700 rounded-full flex items-center justify-center mr-3">
              <img 
                src="/Club logo.jpeg" 
                alt="Machine Magnets Logo"
                className="w-8 h-8 rounded-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                  e.currentTarget.innerHTML = '<div class="text-white font-bold text-sm">MM</div>';
                }}
              />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
              Machine Magnets
            </span>
          </div>
          <p className="text-gray-600 mb-6">
            Empowering the next generation of AI/ML innovators
          </p>
          <p className="text-gray-500">
            © {new Date().getFullYear()} Machine Magnets. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
