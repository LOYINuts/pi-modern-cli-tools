import type { ExtensionAPI } from "@earendil-works/pi-coding-agent";

const CLI_GUIDANCE = `
When shell commands are needed, prefer these modern replacements:
- Use eza instead of ls for directory listings.
- Use bat instead of cat for readable text-file previews.
- Use sd instead of sed for text substitutions.
- Use jaq instead of jq for JSON queries and transformations.
- Use zoxide for fuzzy directory navigation instead of searching paths manually.
`;

export default function (pi: ExtensionAPI) {
  pi.on("before_agent_start", (event) => ({
    systemPrompt: event.systemPrompt + CLI_GUIDANCE,
  }));
}
