import type { ExtensionAPI } from "@earendil-works/pi-coding-agent";

const CLI_GUIDANCE = `
Preferred modern CLI tools:
- Use eza for directory listings.
- Use bat for readable file previews.
- Use sd for text substitutions.
- Use jaq for JSON queries and transformations.
- Use zoxide for fuzzy directory navigation.
`;

export default function (pi: ExtensionAPI) {
  pi.on("before_agent_start", (event) => ({
    systemPrompt: event.systemPrompt + CLI_GUIDANCE,
  }));
}
