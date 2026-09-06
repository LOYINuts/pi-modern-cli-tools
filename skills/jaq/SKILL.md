---
name: jaq
description: Use jaq for JSON queries, filtering, formatting, variables, slurping, and verified in-place updates.
---

# jaq

Extract fields and iterate arrays:

```bash
jaq '.name' file.json
jaq '.items[] | .name' file.json
```

Useful output modes:

```bash
jaq -r '.name' file.json
jaq -c '.' file.json
jaq -M '.' file.json
```

Read standard input:

```bash
<command> | jaq '.items[]'
```

Read all input values as one array:

```bash
jaq -s '.' parts.json
```

Pass string and JSON variables:

```bash
jaq --arg name 'pi' '.name = $name' file.json
jaq --argjson enabled true '.enabled = $enabled' file.json
```

Update JSON in place only after verifying the filter:

```bash
jaq -i '.enabled = true' config.json
```

Use `-M` for machine-parsed output. jaq supports common jq-style filters; verify unusual jq-specific syntax against `jaq --help` before relying on it.
