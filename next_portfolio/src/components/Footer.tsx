import { Github, Linkedin, Twitter, Mail, Phone, Code2, MapPin } from "lucide-react";
import Link from "next/link";

export function Footer() {
    return (
        <footer className="pt-20 pb-10 border-t border-border mt-auto bg-card relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-primary/5 blur-[100px] pointer-events-none"></div>

            <div className="container mx-auto px-4 max-w-6xl relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand / Intro */}
                    <div className="lg:col-span-2 space-y-4">
                        <Link href="/" className="text-2xl font-black tracking-tighter text-foreground flex items-center gap-2">
                            <Code2 className="w-8 h-8 text-primary" /> KAD.
                        </Link>
                        <p className="text-muted-foreground leading-relaxed max-w-md">
                            Turning complex problems into elegant web experiences. Exploring the boundaries of modern frontend architecture and clean design systems.
                        </p>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-6">
                        <h4 className="text-foreground font-bold text-lg">Contact Me</h4>
                        <ul className="space-y-4">
                            <li>
                                <a href="mailto:kelvinatsu213@gmail.com" className="group flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                                    <div className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/10 transition-all">
                                        <Mail className="w-4 h-4" />
                                    </div>
                                    <span className="font-medium">kelvinatsu213@gmail.com</span>
                                </a>
                            </li>
                            <li>
                                <a href="tel:+233592921133" className="group flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                                    <div className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/10 transition-all">
                                        <Phone className="w-4 h-4" />
                                    </div>
                                    <span className="font-medium">+233 592921133</span>
                                </a>
                            </li>
                            <li className="flex items-center gap-3 text-muted-foreground">
                                <div className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center">
                                    <MapPin className="w-4 h-4" />
                                </div>
                                <span className="font-medium">Accra, Ghana</span>
                            </li>
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div className="space-y-6">
                        <h4 className="text-foreground font-bold text-lg">Social Profiles</h4>
                        <div className="flex flex-wrap gap-3">
                            <a href="https://github.com/djayourikelvinatsu-hub" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-background hover:bg-primary/10 hover:border-primary/50 hover:text-primary text-muted-foreground transition-all font-medium text-sm">
                                <Github className="w-4 h-4" /> GitHub
                            </a>
                            <a href="https://www.linkedin.com/in/kelvin-atsu-djayouri-b129a739a" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-background hover:bg-primary/10 hover:border-primary/50 hover:text-primary text-muted-foreground transition-all font-medium text-sm">
                                <Linkedin className="w-4 h-4" /> LinkedIn
                            </a>
                            <a href="https://twitter.com/kelvin_atsud" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-background hover:bg-primary/10 hover:border-primary/50 hover:text-primary text-muted-foreground transition-all font-medium text-sm">
                                <Twitter className="w-4 h-4" /> Twitter
                            </a>
                            <a href="https://dev.to/k_djay_9363cecdb84567e13" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-background hover:bg-primary/10 hover:border-primary/50 hover:text-primary text-muted-foreground transition-all font-medium text-sm">
                                <Code2 className="w-4 h-4" /> Dev.to
                            </a>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-border/50 text-sm text-muted-foreground font-medium">
                    <p>© {new Date().getFullYear()} Kelvin Atsu Djayouri. All rights reserved.</p>
                    <p>Designed & Built with True Black Aesthetics.</p>
                </div>
            </div>
        </footer>
    );
}
