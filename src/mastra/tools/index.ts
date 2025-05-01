import { MCPClient } from "@mastra/mcp";
import { Agent } from "@mastra/core/agent";
import { openai } from "@ai-sdk/openai";
 
const mcp = new MCPClient({
  servers: {
    telegram: {
      command: "npx",
      args: [
        "-y",
        "@smithery/cli@latest",
        "run",
        "@NexusX-MCP/telegram-mcp-server",
        "--key",
        "5cdbf7e6-a3cc-402d-a19d-001b9ffd617f",
        "--profile",
        "experimental-whitefish-QZVP4s"
      ],
    },
  },
});

