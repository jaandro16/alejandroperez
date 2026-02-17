'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Badge } from '../../components/ui/badge';
import {
  Calendar,
  Clock,
  ArrowLeft,
  Tag,
  Share2,
  Terminal,
} from 'lucide-react';

const articles = {
  'owasp-top-10-2025': {
    title: 'OWASP Top 10 (2025): What Changed and Why It Matters',
    date: '2026-02-10',
    readTime: '8 min',
    category: 'Web Security',
    tags: ['OWASP', 'Web Security', 'Vulnerabilities'],
    content: `
## Introduction

The OWASP Top 10 is one of the most important resources in web application security. Every few years, the Open Web Application Security Project updates this list based on data from hundreds of organizations and thousands of applications.

## What Changed in 2025?

The 2025 edition brings significant changes reflecting the evolving threat landscape:

### 1. Broken Access Control
Still holding the top position, broken access control continues to be the most critical web application vulnerability. New emphasis has been placed on API-level access control failures.

### 2. Injection Attacks
While SQL injection remains a concern, the focus has expanded to include NoSQL injection, LDAP injection, and OS command injection patterns that affect modern architectures.

### 3. Cryptographic Failures
Previously known as "Sensitive Data Exposure," this category now focuses specifically on failures related to cryptography, including weak algorithms, improper key management, and insufficient transport layer protection.

## How to Protect Your Applications

- **Implement defense in depth:** Never rely on a single security control.
- **Keep dependencies updated:** Use automated tools like Dependabot or Snyk.
- **Adopt secure coding practices:** Train your development team on OWASP guidelines.
- **Regular security testing:** Integrate SAST and DAST tools in your CI/CD pipeline.

## Conclusion

The OWASP Top 10 remains an essential reference for developers and security professionals. Understanding these vulnerabilities is the first step toward building more secure applications.
    `,
  },
  'secure-ci-cd-pipelines': {
    title: 'Building Secure CI/CD Pipelines: A SecDevOps Guide',
    date: '2026-02-03',
    readTime: '12 min',
    category: 'SecDevOps',
    tags: ['CI/CD', 'DevSecOps', 'Automation', 'Docker'],
    content: `
## Why Security in CI/CD Matters

Modern software development relies heavily on CI/CD pipelines to deliver code quickly and reliably. However, these pipelines can become attack vectors if not properly secured.

## The SecDevOps Approach

SecDevOps integrates security into every stage of the development lifecycle, shifting left to catch vulnerabilities early when they are cheapest to fix.

### Stage 1: Code Commit
- **Pre-commit hooks:** Run linters and basic security checks before code enters the repository.
- **Secret scanning:** Use tools like GitLeaks or TruffleHog to prevent credentials from being committed.

### Stage 2: Build Phase
- **SAST (Static Application Security Testing):** Analyze source code for vulnerabilities using tools like SonarQube or Semgrep.
- **Dependency scanning:** Check for known vulnerabilities in third-party libraries with Snyk or OWASP Dependency-Check.

### Stage 3: Test Phase
- **DAST (Dynamic Application Security Testing):** Test running applications with OWASP ZAP or Burp Suite.
- **Container scanning:** Scan Docker images for vulnerabilities with Trivy or Clair.

### Stage 4: Deploy Phase
- **Infrastructure as Code scanning:** Validate Terraform and Kubernetes configs with Checkov.
- **Runtime protection:** Implement monitoring and alerting for production environments.

## Conclusion

Building secure CI/CD pipelines is not optional in today's threat landscape. By integrating security at every stage, you create a robust defense that scales with your development process.
    `,
  },
  'intro-to-dfir': {
    title: 'Introduction to DFIR: Your First Incident Response Playbook',
    date: '2026-01-20',
    readTime: '10 min',
    category: 'DFIR',
    tags: ['Forensics', 'Incident Response', 'Blue Team'],
    content: `
## What is DFIR?

Digital Forensics and Incident Response (DFIR) combines two critical disciplines: investigating digital evidence and responding to security incidents. Whether you are a seasoned security professional or just starting out, understanding DFIR fundamentals is essential.

## The Incident Response Lifecycle

### 1. Preparation
Build your IR capability before you need it. This includes assembling a team, defining roles, and creating communication plans.

### 2. Identification
Detect and confirm that a security incident has occurred. Use SIEM tools, IDS/IPS alerts, and user reports to identify potential incidents.

### 3. Containment
Stop the bleeding. Short-term containment isolates affected systems, while long-term containment involves applying temporary fixes.

### 4. Eradication
Remove the root cause of the incident. This might involve removing malware, closing vulnerabilities, or resetting compromised credentials.

### 5. Recovery
Restore systems to normal operation. Verify that systems are clean and monitor for any signs of re-infection.

### 6. Lessons Learned
Conduct a post-incident review. Document what happened, what worked, what did not, and how to improve.

## Building Your First Playbook

A good IR playbook should be specific, actionable, and regularly tested. Start with common scenarios like phishing attacks, malware infections, or unauthorized access and build from there.
    `,
  },
  'burp-suite-essentials': {
    title: 'Burp Suite Essentials: From Proxy to Professional Pentesting',
    date: '2026-01-10',
    readTime: '15 min',
    category: 'Pentesting',
    tags: ['Burp Suite', 'Pentesting', 'Web Apps', 'Tools'],
    content: `
## Getting Started with Burp Suite

Burp Suite is the industry-standard tool for web application penetration testing. This guide covers the essential features you need to know to start testing effectively.

## Core Components

### Proxy
The Burp Proxy is your gateway to intercepting HTTP/HTTPS traffic between your browser and target applications. Configure your browser to route traffic through Burp and you can inspect, modify, and replay every request.

### Scanner
The automated scanner identifies common vulnerabilities like XSS, SQL injection, and CSRF. While it is powerful, always verify findings manually to avoid false positives.

### Intruder
Intruder automates customized attacks. Use it for brute-forcing login forms, fuzzing parameters, and testing for injection points with custom payloads.

### Repeater
Repeater lets you manually modify and resend individual requests. It is invaluable for fine-tuning exploits and understanding exactly how an application responds to different inputs.

## Pro Tips

- **Scope your targets:** Always define your target scope to avoid testing unauthorized systems.
- **Use extensions:** The BApp Store has hundreds of extensions that extend Burp's functionality.
- **Document everything:** Take screenshots and notes as you test. Good documentation makes your reports better.

## Conclusion

Mastering Burp Suite takes practice, but these fundamentals will give you a solid foundation for web application penetration testing.
    `,
  },
  'linux-hardening-checklist': {
    title: 'Linux Server Hardening: The Complete Checklist',
    date: '2025-12-15',
    readTime: '11 min',
    category: 'Hardening',
    tags: ['Linux', 'Hardening', 'Sysadmin', 'Security'],
    content: `
## Why Harden Your Linux Servers?

A default Linux installation is not secure enough for production. Hardening reduces the attack surface and makes it significantly harder for attackers to compromise your systems.

## The Essential Checklist

### User Management
- Disable root SSH login
- Enforce strong password policies
- Implement SSH key-based authentication
- Remove unnecessary user accounts
- Configure sudo with least privilege

### Network Security
- Configure firewall rules (iptables/nftables)
- Disable unused network services
- Enable TCP Wrappers where applicable
- Configure fail2ban for brute force protection
- Implement network segmentation

### File System Security
- Set appropriate file permissions
- Enable disk encryption
- Configure /tmp with noexec
- Implement file integrity monitoring (AIDE/Tripwire)
- Regular backup verification

### Logging & Monitoring
- Configure centralized logging (rsyslog/journald)
- Enable audit logging (auditd)
- Set up log rotation
- Implement alerting for suspicious activity
- Regular log review procedures

## Conclusion

Server hardening is an ongoing process. Regularly review and update your security configurations as new threats emerge and best practices evolve.
    `,
  },
  'react-xss-prevention': {
    title: 'Preventing XSS in React Applications: A Developer Guide',
    date: '2025-12-01',
    readTime: '7 min',
    category: 'Secure Development',
    tags: ['React', 'XSS', 'Frontend Security', 'JavaScript'],
    content: `
## React and XSS: The Basics

React provides built-in XSS protection by escaping values embedded in JSX before rendering. However, there are several scenarios where developers can inadvertently introduce XSS vulnerabilities.

## Where React Protects You

By default, React DOM escapes any values embedded in JSX. This means that user input rendered through curly braces is safe from injection attacks.

## Where You Are Still Vulnerable

### dangerouslySetInnerHTML
As the name suggests, this prop is dangerous. Never use it with unsanitized user input. If you must render HTML, use a sanitization library like DOMPurify.

### href and src Attributes
React does not sanitize URL values. An attacker could inject javascript: URLs. Always validate and sanitize URLs before rendering them.

### Server-Side Rendering
SSR can introduce XSS if you are not careful about how data is serialized and injected into the HTML document.

## Best Practices

- **Never trust user input.** Always validate and sanitize data on both client and server.
- **Use Content Security Policy headers.** CSP provides an additional layer of protection.
- **Keep dependencies updated.** Vulnerable libraries can introduce XSS even in well-written code.
- **Use TypeScript.** Strong typing can help catch potential injection points at compile time.

## Conclusion

While React provides excellent default XSS protection, understanding the edge cases where you are still vulnerable is crucial for building secure applications.
    `,
  },
  'volatility-memory-forensics': {
    title: 'Memory Forensics with Volatility: Analyzing RAM Dumps',
    date: '2025-11-18',
    readTime: '14 min',
    category: 'DFIR',
    tags: ['Volatility', 'Memory Forensics', 'Malware Analysis'],
    content: `
## Introduction to Memory Forensics

Memory forensics is the analysis of a computer's volatile memory (RAM) to uncover evidence of malicious activity. Unlike disk forensics, memory analysis can reveal running processes, network connections, and artifacts that may not exist on disk.

## Setting Up Volatility

Volatility is an open-source memory forensics framework written in Python. Install it and familiarize yourself with its plugin system before attempting real analysis.

## Essential Plugins

### pslist / psscan
List running processes. Use psscan to also find hidden or terminated processes that pslist might miss.

### netscan
Display network connections and listening ports. Invaluable for identifying C2 communications and data exfiltration.

### malfind
Find injected code and hidden DLLs in process memory. This plugin is essential for identifying malware that operates entirely in memory.

### dumpfiles
Extract files from memory, including executables, DLLs, and documents that were open at the time of capture.

## Real-World Workflow

1. **Acquire memory image** using tools like FTK Imager, WinPMEM, or LiME.
2. **Identify the profile** matching the operating system version.
3. **Start with process analysis** to identify suspicious activity.
4. **Check network connections** for external communications.
5. **Extract artifacts** for further analysis in sandbox environments.

## Conclusion

Memory forensics is a powerful technique that can reveal evidence invisible to traditional disk forensics. Master Volatility and you will have a critical tool in your DFIR arsenal.
    `,
  },
  'sql-injection-deep-dive': {
    title: 'SQL Injection Deep Dive: Beyond the Basics',
    date: '2025-11-05',
    readTime: '13 min',
    category: 'Pentesting',
    tags: ['SQL Injection', 'Databases', 'Pentesting', 'OWASP'],
    content: `
## Beyond Basic SQL Injection

Most developers know about simple SQL injection, but the reality is far more nuanced. Advanced techniques can bypass WAFs, extract data through side channels, and exploit trust relationships between applications.

## Types of SQL Injection

### In-Band SQLi (Classic)
The attacker uses the same communication channel to launch the attack and retrieve results. This includes error-based and UNION-based techniques.

### Blind SQLi
When the application does not return error messages or query results directly. Boolean-based blind SQLi observes different application responses, while time-based techniques use database delays.

### Out-of-Band SQLi
Uses alternative channels to extract data, such as DNS or HTTP requests initiated by the database server. Useful when other techniques are not viable.

### Second-Order SQLi
The payload is stored in the database and executed later in a different context. This is harder to detect because the injection point and execution point are separate.

## Prevention

- **Parameterized queries:** Always use prepared statements with bound parameters.
- **Input validation:** Validate and sanitize all user input on the server side.
- **Least privilege:** Database accounts should have minimal necessary permissions.
- **WAF rules:** Use Web Application Firewalls as an additional defense layer.
- **Regular testing:** Include SQL injection testing in your security assessment process.

## Conclusion

SQL injection remains one of the most dangerous web vulnerabilities. Understanding advanced techniques helps both attackers (for ethical testing) and defenders (for better protection).
    `,
  },
};

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function BlogArticlePage() {
  const params = useParams();
  const article = articles[params.slug];

  if (!article) {
    return (
      <div className='min-h-screen py-20 px-4 flex items-center justify-center'>
        <div className='text-center'>
          <h1 className='text-4xl font-bold mb-4 text-foreground'>
            Article Not Found
          </h1>
          <p className='text-muted-foreground mb-6'>
            The article you are looking for does not exist.
          </p>
          <Link
            href='/blog'
            className='inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors'
          >
            <ArrowLeft size={16} />
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  // Simple markdown-like rendering
  const renderContent = (content) => {
    const lines = content.trim().split('\n');
    const elements = [];
    let i = 0;

    while (i < lines.length) {
      const line = lines[i].trim();

      if (!line) {
        i++;
        continue;
      }

      if (line.startsWith('## ')) {
        elements.push(
          <h2 key={i} className='text-2xl font-bold text-foreground mt-10 mb-4'>
            {line.replace('## ', '')}
          </h2>,
        );
      } else if (line.startsWith('### ')) {
        elements.push(
          <h3
            key={i}
            className='text-xl font-semibold text-foreground mt-8 mb-3'
          >
            {line.replace('### ', '')}
          </h3>,
        );
      } else if (line.startsWith('- **')) {
        elements.push(
          <li
            key={i}
            className='text-muted-foreground leading-relaxed ml-4 mb-2 list-disc'
          >
            <span className='text-foreground font-medium'>
              {line.match(/\*\*(.*?)\*\*/)?.[1]}
            </span>
            {line.replace(/- \*\*.*?\*\*/, '')}
          </li>,
        );
      } else if (line.startsWith('- ')) {
        elements.push(
          <li
            key={i}
            className='text-muted-foreground leading-relaxed ml-4 mb-2 list-disc'
          >
            {line.replace('- ', '')}
          </li>,
        );
      } else if (line.match(/^\d+\./)) {
        elements.push(
          <li
            key={i}
            className='text-muted-foreground leading-relaxed ml-4 mb-2 list-decimal'
          >
            {line.replace(/^\d+\.\s*/, '').replace(/\*\*(.*?)\*\*/g, '$1')}
          </li>,
        );
      } else {
        elements.push(
          <p key={i} className='text-muted-foreground leading-relaxed mb-4'>
            {line}
          </p>,
        );
      }

      i++;
    }

    return elements;
  };

  return (
    <div className='min-h-screen py-20 px-4 sm:px-6 lg:px-8'>
      <article className='max-w-3xl mx-auto'>
        {/* Back link */}
        <Link
          href='/blog'
          className='inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 text-sm'
        >
          <ArrowLeft size={16} />
          Back to all articles
        </Link>

        {/* Article header */}
        <header className='mb-10'>
          <div className='flex items-center gap-2 mb-4'>
            <Badge
              variant='outline'
              className='text-xs border-primary/40 text-primary'
            >
              {article.category}
            </Badge>
          </div>

          <h1 className='text-3xl sm:text-4xl font-bold text-foreground mb-4 leading-tight'>
            {article.title}
          </h1>

          <div className='flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6'>
            <span className='inline-flex items-center gap-1'>
              <Calendar size={14} />
              {formatDate(article.date)}
            </span>
            <span className='inline-flex items-center gap-1'>
              <Clock size={14} />
              {article.readTime}
            </span>
          </div>

          <div className='flex flex-wrap gap-1.5'>
            {article.tags.map((tag) => (
              <span
                key={tag}
                className='inline-flex items-center gap-1 text-xs text-muted-foreground bg-muted/30 px-2 py-0.5 rounded'
              >
                <Tag size={10} />
                {tag}
              </span>
            ))}
          </div>
        </header>

        {/* Divider */}
        <div className='h-px bg-border mb-10' />

        {/* Article content */}
        <div className='prose-custom'>{renderContent(article.content)}</div>

        {/* Share + Back */}
        <div className='mt-12 pt-8 border-t border-border flex items-center justify-between'>
          <Link
            href='/blog'
            className='inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors'
          >
            <ArrowLeft size={16} />
            Back to all articles
          </Link>
          <button
            onClick={() => {
              if (navigator.share) {
                navigator.share({
                  title: article.title,
                  url: window.location.href,
                });
              } else {
                navigator.clipboard.writeText(window.location.href);
              }
            }}
            className='inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors'
          >
            <Share2 size={16} />
            Share
          </button>
        </div>
      </article>
    </div>
  );
}
