# Agent OS dashboard

The published page for Agent OS, served by GitHub Pages at https://willgeiken1.github.io/agent-os-dashboard/.

This repo holds only the built page. Its source, tests and the worker live in the private `agent-os` repo (`dashboard/`). The page contains no secrets: it uses the public Supabase publishable key, and every read and change requires the owner's sign-in and passes Supabase's owner checks.
