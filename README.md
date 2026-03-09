![npm](https://img.shields.io/npm/v/vote-battle-sdk?color=blueviolet) ![license](https://img.shields.io/badge/license-MIT-blue)



## Contract Details

| Property | Value |
|---|---|
| Network | Stacks Mainnet |
| Address | `SP1Q7YR67R6WGP28NXDJD1WZ11REPAAXRJJ3V6RKM` |
| Name | `vote-dapp-stacks` |
| Explorer | [View on Hiro](https://explorer.hiro.so/address/SP1Q7YR67R6WGP28NXDJD1WZ11REPAAXRJJ3V6RKM.vote-dapp-stacks?chain=mainnet) |



## FAQ

**Q: How do I vote?**
Connect your Leather or Xverse wallet and click Vote A or Vote B on any poll.

**Q: Is voting free?**
Only the Stacks network transaction fee (~0.001 STX).

**Q: Can I change my vote?**
No — votes are final once confirmed on-chain.

**Q: How is the leaderboard calculated?**
By total number of votes cast across all polls.



## Roadmap

- [ ] Multiple simultaneous battles
- [ ] NFT trophies for battle winners
- [ ] Delegated voting power
- [ ] Mobile-first redesign
- [ ] Push notifications for battle end



## Contributing

PRs welcome! Please open an issue first to discuss major changes.

## Tech Stack

- **Smart Contract**: Clarity on Stacks blockchain
- **Frontend**: Next.js 14 (App Router) + TypeScript + Tailwind CSS
- **Wallet**: Leather / Xverse via @stacks/connect
- **SDK**: TypeScript client published to npm
- **Hosting**: Vercel



## Security

- Smart contract is open-source and fully auditable
- No admin keys — contract is immutable post-deploy
- Votes are finalized on-chain; no off-chain oracle required
- Report issues via GitHub Issues

## License

MIT © brventonbeshers



## Deployment

The frontend is deployed on Vercel. Set the following environment variables:

```
NEXT_PUBLIC_CONTRACT_ADDRESS=SP1Q7YR67R6WGP28NXDJD1WZ11REPAAXRJJ3V6RKM
NEXT_PUBLIC_CONTRACT_NAME=vote-dapp-stacks
NEXT_PUBLIC_NETWORK=mainnet
```



## Security

- Smart contract is open-source and fully auditable
- No admin keys — contract is immutable post-deploy
- Votes are finalized on-chain; no off-chain oracle required
- Report issues via GitHub Issues
<!-- tech-note: Built with Next.js 14 App Router and @stacks/connect. -->

## Tech Stack

- **Smart Contract**: Clarity on Stacks blockchain
- **Frontend**: Next.js 14 (App Router) + TypeScript + Tailwind CSS
- **Wallet**: Leather / Xverse via @stacks/connect
- **SDK**: TypeScript client published to npm
- **Hosting**: Vercel

