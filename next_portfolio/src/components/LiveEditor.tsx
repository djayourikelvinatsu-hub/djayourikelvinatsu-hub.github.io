"use client";

import React, { useState } from "react";
import { LiveProvider, LiveEditor as ReactLiveEditor, LiveError, LivePreview } from "react-live";
import { themes } from "prism-react-renderer";

interface LiveEditorProps {
    initialCode: string;
}

export function LiveEditor({ initialCode }: LiveEditorProps) {
    const [code, setCode] = useState(initialCode);

    return (
        <div className="rounded-xl overflow-hidden border border-border shadow-sm my-6 bg-card text-card-foreground">
            <LiveProvider code={code} theme={themes.dracula}>
                <div className="flex flex-col md:flex-row h-full">
                    {/* Editor pane */}
                    <div className="w-full md:w-1/2 border-b md:border-b-0 md:border-r border-border relative">
                        <div className="bg-muted px-4 py-2 border-b border-border text-xs font-semibold text-muted-foreground uppercase tracking-wider flex justify-between items-center">
                            <span>Interactive Editor</span>
                            <span className="bg-primary/20 text-primary px-2 py-0.5 rounded">Editable</span>
                        </div>
                        <div className="p-4 bg-background overflow-auto h-[350px] md:h-[450px]">
                            <ReactLiveEditor
                                onChange={setCode}
                                className="font-mono text-sm leading-relaxed outline-none"
                            />
                        </div>
                    </div>

                    {/* Result pane */}
                    <div className="w-full md:w-1/2 flex flex-col bg-background/50 relative">
                        <div className="bg-muted px-4 py-2 border-b border-border text-xs font-semibold text-muted-foreground uppercase tracking-wider flex justify-between items-center">
                            <span>Live Preview</span>
                            <div className="flex gap-2">
                                <span className="w-2 h-2 rounded-full bg-red-500"></span>
                                <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
                                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                            </div>
                        </div>
                        <div className="p-6 overflow-auto h-[350px] md:h-[450px] flex items-center justify-center bg-card">
                            <LivePreview />
                        </div>
                        <div className="absolute bottom-0 w-full">
                            <LiveError className="bg-red-950/90 text-red-400 p-4 text-sm font-mono whitespace-pre-wrap border-t border-red-900/50" />
                        </div>
                    </div>
                </div>
            </LiveProvider>
        </div>
    );
}
