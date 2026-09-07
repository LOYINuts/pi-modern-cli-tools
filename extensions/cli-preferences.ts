import type { ExtensionAPI } from "@earendil-works/pi-coding-agent";

const CLI_GUIDANCE = `
When shell commands are needed, prefer these tools when suitable:
- Prefer eza for directory listings.
- Prefer bat for readable text-file previews.
- Prefer sd for simple text substitutions in files.
- Prefer jaq for JSON queries and transformations.
- Prefer zoxide for fuzzy directory navigation.
- Use standard tools when the preferred tool is unavailable or unsuitable.
`;

export default function (pi: ExtensionAPI) {
  pi.on("before_agent_start", (event) => ({
    systemPrompt: event.systemPrompt + CLI_GUIDANCE,
  }));
}
