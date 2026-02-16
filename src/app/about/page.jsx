'use client';

import { useState, useEffect } from 'react';
import GitHubCalendar from 'react-github-calendar';
import { Card, CardContent } from '@/components/ui/card';
import {
  Dumbbell,
  Plane,
  Shield,
  Calendar,
  GitBranch,
  Star,
  Wifi,
  Bug,
  Terminal,
  Search,
  Eye,
  Lock,
  Cpu,
} from 'lucide-react';

const skills = [
  { name: 'Django', color: 'bg-green-500' },
  { name: 'JavaScript', color: 'bg-yellow-500' },
  { name: 'Node.js', color: 'bg-green-600' },
  { name: 'React', color: 'bg-blue-500' },
  { name: 'HTML5', color: 'bg-orange-500' },
  { name: 'CSS', color: 'bg-blue-600' },
  { name: 'MySQL', color: 'bg-blue-700' },
  { name: 'Git', color: 'bg-red-500' },
  { name: 'PostgreSQL', color: 'bg-blue-800' },
  { name: 'Python', color: 'bg-yellow-600' },
  { name: 'Java', color: 'bg-red-600' },
  { name: 'C#', color: 'bg-purple-600' },
];

const tools = [
  { name: 'Astro', icon: '🚀' },
  { name: 'VS Code', icon: '💻' },
  { name: 'Postman', icon: '📮' },
  { name: 'Docker', icon: '🐳' },
  { name: 'Vercel', icon: '▲' },
];

const cyberSkills = [
  { name: 'Nmap', icon: Wifi, desc: 'Network scanning' },
  { name: 'Burp Suite', icon: Bug, desc: 'Web app testing' },
  { name: 'Metasploit', icon: Terminal, desc: 'Exploitation framework' },
  { name: 'Wireshark', icon: Search, desc: 'Packet analysis' },
  { name: 'Autopsy', icon: Eye, desc: 'Digital forensics' },
  { name: 'Hashcat', icon: Lock, desc: 'Password cracking' },
  { name: 'Volatility', icon: Cpu, desc: 'Memory forensics' },
  { name: 'OWASP ZAP', icon: Shield, desc: 'Security testing' },
];

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [githubStats, setGithubStats] = useState({
    contributions: 0,
    streak: 15,
    repositories: 11,
  });

  useEffect(() => {
    setIsVisible(true);
    // Simulate GitHub API call
    // In a real app, you'd fetch from GitHub API
  }, []);

  // Tema personalizado corregido para el calendario de GitHub
  const calendarTheme = {
    dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
  };

  return (
    <div className='min-h-screen py-20 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-6xl mx-auto'>
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          <h1 className='text-4xl sm:text-5xl font-bold mb-6 gradient-text'>
            About Me
          </h1>
          <p className='text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed'>
            I'm a passionate junior web developer dedicated to crafting
            exceptional digital experiences. When I'm not coding, you'll find me
            at the gym, exploring new destinations, or diving deep into
            cybersecurity.
          </p>
        </div>

        {/* Personal Interests */}
        <div
          className={`mb-16 transition-all duration-1000 delay-200 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          <h2 className='text-3xl text-white font-semibold mb-8 text-center'>
            Personal Interests
          </h2>
          <div className='grid md:grid-cols-3 gap-6'>
            <Card className='hover-lift bg-card border-border'>
              <CardContent className='p-6 text-center'>
                <div className='w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center'>
                  <Dumbbell className='text-primary' size={32} />
                </div>
                <h3 className='text-xl font-semibold mb-2'>Fitness & Gym</h3>
                <p className='text-muted-foreground'>
                  Maintaining physical and mental health through regular
                  workouts and strength training
                </p>
              </CardContent>
            </Card>

            <Card className='hover-lift bg-card border-border'>
              <CardContent className='p-6 text-center'>
                <div className='w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center'>
                  <Plane className='text-primary' size={32} />
                </div>
                <h3 className='text-xl font-semibold mb-2'>Travel</h3>
                <p className='text-muted-foreground'>
                  Exploring new cultures, cuisines, and perspectives around the
                  world
                </p>
              </CardContent>
            </Card>

            <Card className='hover-lift bg-card border-border'>
              <CardContent className='p-6 text-center'>
                <div className='w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center'>
                  <Shield className='text-primary' size={32} />
                </div>
                <h3 className='text-xl font-semibold mb-2'>Cybersecurity</h3>
                <p className='text-muted-foreground'>
                  Staying updated with the latest security practices and ethical
                  hacking techniques
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Professional Skillset */}
        <div
          className={`mb-16 transition-all duration-1000 delay-400 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          <h2 className='text-3xl text-white font-semibold mb-8 text-center'>
            Professional Skillset
          </h2>
          <Card className='bg-card border-border'>
            <CardContent className='p-8'>
              <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4'>
                {skills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className='flex flex-col items-center p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors hover-lift'
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div
                      className={`w-12 h-12 rounded-full ${skill.color} mb-3 flex items-center justify-center`}
                    >
                      <span className='text-white font-bold text-sm'>
                        {skill.name.charAt(0)}
                      </span>
                    </div>
                    <span className='text-sm font-medium text-center text-white'>
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Cybersecurity Toolkit */}
        <div
          className={`mb-16 transition-all duration-1000 delay-450 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          <h2 className='text-3xl text-white font-semibold mb-2 text-center'>
            Cybersecurity Toolkit
          </h2>
          <p className='text-muted-foreground text-center mb-8'>
            Pentesting, Forensics & Security Tools
          </p>
          <div className='grid grid-cols-2 sm:grid-cols-4 gap-4'>
            {cyberSkills.map((tool) => (
              <div
                key={tool.name}
                className='group p-4 rounded-xl bg-card/80 border border-border hover:border-primary/30 transition-all duration-300 hover-lift text-center'
              >
                <div className='w-10 h-10 mx-auto mb-3 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors'>
                  <tool.icon className='text-primary' size={20} />
                </div>
                <span className='text-sm font-medium text-foreground block'>
                  {tool.name}
                </span>
                <span className='text-xs text-muted-foreground'>
                  {tool.desc}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Tools I Use */}
        <div
          className={`mb-16 transition-all duration-1000 delay-500 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          <h2 className='text-3xl text-white font-semibold mb-8 text-center'>
            Tools I Use
          </h2>
          <Card className='bg-card border-border'>
            <CardContent className='p-8'>
              <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6'>
                {tools.map((tool, index) => (
                  <div
                    key={tool.name}
                    className='flex flex-col items-center p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors hover-lift'
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className='text-3xl mb-3'>{tool.icon}</div>
                    <span className='text-sm font-medium text-center text-white'>
                      {tool.name}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Days I Code - GitHub Stats */}
        <div
          className={`transition-all duration-1000 delay-600 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          <h2 className='text-3xl text-white font-semibold mb-8 text-center'>
            Days I Code
          </h2>
          <Card className='bg-card border-border'>
            <CardContent className='p-8'>
              <div className='grid md:grid-cols-3 gap-6 text-center mb-8'>
                <div className='p-6 rounded-lg bg-muted/50'>
                  <div className='flex items-center justify-center mb-4'>
                    <Calendar className='text-primary mr-2' size={32} />
                  </div>
                  <div className='text-3xl font-bold text-primary mb-2'>
                    {githubStats.contributions}
                  </div>
                  <div className='text-muted-foreground'>
                    Contributions This Year
                  </div>
                </div>

                <div className='p-6 rounded-lg bg-muted/50'>
                  <div className='flex items-center justify-center mb-4'>
                    <GitBranch className='text-primary mr-2' size={32} />
                  </div>
                  <div className='text-3xl font-bold text-primary mb-2'>
                    {githubStats.streak}
                  </div>
                  <div className='text-muted-foreground'>Day Streak</div>
                </div>

                <div className='p-6 rounded-lg bg-muted/50'>
                  <div className='flex items-center justify-center mb-4'>
                    <Star className='text-primary mr-2' size={32} />
                  </div>
                  <div className='text-3xl font-bold text-primary mb-2'>
                    {githubStats.repositories}
                  </div>
                  <div className='text-muted-foreground'>
                    Public Repositories
                  </div>
                </div>
              </div>

              {/* GitHub Calendar */}
              <div className='mt-8 p-6 rounded-lg bg-muted/30 hidden md:block'>
                {/* <h3 className='text-xl font-semibold text-center mb-6 text-white'>
                  GitHub Activity Calendar
                </h3> */}
                <div className='flex justify-center overflow-x-auto'>
                  <GitHubCalendar
                    username='jaandro16'
                    theme={calendarTheme}
                    colorScheme='dark'
                    blockSize={12}
                    blockMargin={4}
                    fontSize={14}
                    hideColorLegend={false}
                    hideMonthLabels={false}
                    hideTotalCount={false}
                    showWeekdayLabels={true}
                  />
                </div>
              </div>

              <div className='mt-8 text-center'>
                <p className='text-muted-foreground mb-4'>
                  Check out my GitHub activity and contributions
                </p>
                <a
                  href='https://github.com/jaandro16'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors hover-lift'
                >
                  <GitBranch className='mr-2' size={20} />
                  View GitHub Profile
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
