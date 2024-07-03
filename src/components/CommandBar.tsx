// src/components/CommandBar.tsx
"use client";
import { useState, useEffect } from "react";
import { Command } from "cmdk";
import { KBarProvider, KBarSearch, KBarResults } from "kbar";

const CommandBar = () => {
  const [query, setQuery] = useState("");
  useEffect(() => {
    console.log(`Query updated to: ${query}`);
  }, [query]);

  return (
    <Command>
      <Command.Input
        placeholder="Type a command or search..."
        value={query}
        onValueChange={setQuery}
      />
      <Command.List>
        {/* Command items here */}
      </Command.List>
    </Command>
  );
};

export default CommandBar;
