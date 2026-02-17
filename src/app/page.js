"use client"

import { useState, useEffect } from "react"
import { Github, Linkedin, ArrowDown, Code, Zap, Globe, MapPin, Shield, Bug, Lock, Workflow, Scan, Database } from "lucide-react"
import { Button } from "../components/ui/button"

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false)
  const [typingText, setTypingText] = useState("")
  const [wordIndex, setWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  const words = [
    "Web Developer",
    "Forensics Curious",
    "Pentesting Enthusiast",
    "SecDevOps Learner",
    "DFIR Explorer",
  ]

  useEffect(() => {
    setIsVisible(true)
  }, [])

  useEffect(() => {
    const currentWord = words[wordIndex]
    const typingSpeed = isDeleting ? 40 : 80
    const pauseBeforeDelete = 1000
    const pauseBeforeNext = 300

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        const nextText = currentWord.slice(0, typingText.length + 1)
        setTypingText(nextText)

        if (nextText === currentWord) {
          setTimeout(() => setIsDeleting(true), pauseBeforeDelete)
        }
      } else {
        const nextText = currentWord.slice(0, typingText.length - 1)
        setTypingText(nextText)

        if (nextText === "") {
          setIsDeleting(false)
          setWordIndex((prev) => (prev + 1) % words.length)
        }
      }
    }, typingSpeed)

    return () => clearTimeout(timeout)
  }, [typingText, isDeleting, wordIndex, words])

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
            {/* Greeting */}
            <div className="mb-8">
              <p className="text-lg sm:text-xl text-primary font-medium mb-2">Hello, I am</p>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-4">
                <span className="gradient-text">Alejandro Pérez</span>
              </h1>
              <h2 className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-6 font-light">
                {typingText}
                <span className="inline-block w-[1ch] text-primary animate-pulse">|</span>
              </h2>
            </div>
            {/* Description */}
            <div className="mb-12">
              <p className="text-lg sm:text-xl text-muted-foreground mb-6 max-w-3xl mx-auto leading-relaxed">
                Web developer building modern, secure applications. Currently specializing in cybersecurity with a focus on secure development practices, pentesting, and digital forensics.
              </p>
              
              {/* Location and Status */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-muted-foreground mb-8">
                <div className="flex items-center gap-2">
                  <MapPin size={16} />
                  <span>Madrid, Spain</span>
                </div>
                <div className="hidden sm:block w-1 h-1 bg-primary rounded-full"></div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span>Available for work</span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div
            className={`flex px-14 flex-col sm:flex-row gap-4 justify-center mb-16 transition-all duration-1000 delay-300 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground hover-lift animate-glow"
              onClick={() => window.location.href = '/projects'}
            >
              View My Work
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground hover-lift bg-transparent"
              onClick={() => window.location.href = '/about'}
            >
              About Me
            </Button>
          </div>

          {/* Social Links */}
          <div
            className={`flex justify-center space-x-8 mb-16 transition-all duration-1000 delay-500 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
          >
            <a
              href="https://github.com/jaandro16"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors hover-lift"
            >
              <Github size={28} />
            </a>
            <a
              href="https://www.linkedin.com/in/alejandro-pérez-rentero-396033265"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors hover-lift"
            >
              <Linkedin size={28} />
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className={`transition-all duration-1000 delay-700 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
            <ArrowDown className="mx-auto text-muted-foreground animate-bounce" size={26} />
          </div>
        </div>
      </section>

      {/* Skills Preview Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl sm:text-4xl font-bold mb-4 gradient-text">What I Do</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Building secure digital experiences across development, security, and operations
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="text-center p-6 rounded-lg bg-card border border-border hover-lift">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <Code className="text-primary" size={32} />
              </div>
              <h4 className="text-xl text-white font-semibold mb-2">Web Development</h4>
              <p className="text-muted-foreground">
                Modern, responsive web apps with strong UX and performance foundations.
              </p>
            </div>

            <div className="text-center p-6 rounded-lg bg-card border border-border hover-lift">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <Bug className="text-primary" size={32} />
              </div>
              <h4 className="text-xl text-white font-semibold mb-2">Pentesting</h4>
              <p className="text-muted-foreground">
                Identifying and validating vulnerabilities through ethical testing.
              </p>
            </div>

            <div className="text-center p-6 rounded-lg bg-card border border-border hover-lift">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <Lock className="text-primary" size={32} />
              </div>
              <h4 className="text-xl text-white font-semibold mb-2">Hardening</h4>
              <p className="text-muted-foreground">
                Reducing attack surface with secure configurations and controls.
              </p>
            </div>

            <div className="text-center p-6 rounded-lg bg-card border border-border hover-lift">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <Workflow className="text-primary" size={32} />
              </div>
              <h4 className="text-xl text-white font-semibold mb-2">SecDevOps</h4>
              <p className="text-muted-foreground">
                Embedding security into CI/CD pipelines and delivery workflows.
              </p>
            </div>

            <div className="text-center p-6 rounded-lg bg-card border border-border hover-lift">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <Scan className="text-primary" size={32} />
              </div>
              <h4 className="text-xl text-white font-semibold mb-2">DFIR</h4>
              <p className="text-muted-foreground">
                Incident response and recovery with a data-driven approach.
              </p>
            </div>

            <div className="text-center p-6 rounded-lg bg-card border border-border hover-lift">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <Database className="text-primary" size={32} />
              </div>
              <h4 className="text-xl text-white font-semibold mb-2">Forensics</h4>
              <p className="text-muted-foreground">
                Analyzing digital evidence to understand and document incidents.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="text-2xl sm:text-3xl font-light text-muted-foreground italic mb-4">
            &ldquo;Anything one man can imagine, other man can make real.&rdquo;
          </blockquote>
          <cite className="text-primary font-medium">— Jules Verne</cite>
        </div>
      </section>
    </div>
  )
}
