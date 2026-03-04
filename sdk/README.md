# vote-battle-sdk

TypeScript SDK for interacting with the **Vote Battle** smart contract on Stacks blockchain.

Vote Battle is an on-chain "A vs B" voting dApp with 20 fixed polls (BMW vs Mercedes, iPhone vs Android, etc.).

## Installation

```bash
npm install vote-battle-sdk
```

## Quick Start

```typescript
import { VoteBattleClient } from "vote-battle-sdk";

const client = new VoteBattleClient({
  contractAddress: "SP1Q7YR67R6WGP28NXDJD1WZ11REPAAXRJJ3V6RKM",
  contractName: "vote-dapp-stacks",
});

// Get results for poll #1 (BMW vs Mercedes)
const results = await client.getPollResults(1);
console.log(`BMW: ${results.optionA}, Mercedes: ${results.optionB}`);

// Get all 20 poll results
const all = await client.getAllPollResults();

// Get leaderboard (sorted by total votes)
const leaderboard = await client.getLeaderboard();

// Get voter stats
const stats = await client.getVoterStats("SP...");

// Build vote transaction args (use with @stacks/connect)
const args = client.getVoteArgs(1, 1); // Poll 1, Option A
```

## API

### `new VoteBattleClient(config)`

| Param | Type | Description |
|-------|------|-------------|
| `contractAddress` | `string` | Deployer's Stacks address |
| `contractName` | `string` | Contract name |
| `network` | `"mainnet" \| "testnet"` | Network (default: `"mainnet"`) |

### Methods

| Method | Returns | Description |
|--------|---------|-------------|
| `getPollResults(pollId)` | `PollResults` | Vote counts for a poll |
| `getAllPollResults()` | `PollResults[]` | All 20 poll results |
| `getVoterStats(address)` | `VoterStats` | Total votes by address |
| `getVoterPollStats(address, pollId)` | `VoterPollStats` | Voter's stats per poll |
| `getLeaderboard()` | `(PollResults & { name })[]` | Polls ranked by votes |
| `getVoteArgs(pollId, option)` | `object` | Args for `openContractCall` |

## Polls

| # | Option A | Option B |
|---|----------|----------|
| 1 | BMW | Mercedes |
| 2 | iPhone | Android |
| 3 | PlayStation | Xbox |
| 4 | Coca-Cola | Pepsi |
| 5 | Marvel | DC |
| 6 | McDonald's | Burger King |
| 7 | Nike | Adidas |
| 8 | Cat | Dog |
| 9 | Summer | Winter |
| 10 | Coffee | Tea |
| 11 | Netflix | YouTube |
| 12 | Bitcoin | Ethereum |
| 13 | Morning | Night |
| 14 | Book | Movie |
| 15 | Pizza | Sushi |
| 16 | Rock | Hip-Hop |
| 17 | Twitter/X | Telegram |
| 18 | PC | Console |
| 19 | Gym | Calisthenics |
| 20 | React | Vue |

## License

MIT
