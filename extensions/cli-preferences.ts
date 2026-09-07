import type { ExtensionAPI } from "@earendil-works/pi-coding-agent";

const CLI_GUIDANCE = `
CLI tool preference:
- Use Pi's built-in read and edit tools for file reading and file changes.
- For file discovery, prefer rg or rg --files.
- For JSON queries and transformations, prefer jaq.
- For text substitutions in shell commands, prefer sd over sed when sd is available.
- For human-readable directory listings, prefer eza over ls when eza is available.
- Use bat for deliberate terminal file previews, not as a replacement for Pi read.
- Use zoxide only for interactive or fuzzy directory navigation; use explicit paths in scripted commands.
- Fall back to standard tools when a preferred tool is unavailable or unsuitable.
`;

export default function (pi: ExtensionAPI) {
  pi.on("before_agent_start", (event) => ({
    systemPrompt: event.systemPrompt + CLI_GUIDANCE,
  }));
}
