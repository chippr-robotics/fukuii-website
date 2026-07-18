# Fukuii

**The execution client built to finance's standard.**

Fukuii is a Scala execution client for Ethereum and the EVM ecosystem. Feature-complete, signed and SBOM-verifiable, open source, from solo operators to institutional infrastructure.

[fukuii.com](https://fukuii.com) · [Download](https://github.com/chippr-robotics/fukuii/releases) · [Guide](https://fukuii.com/guide) · [Docs](https://docs.fukuii.com)

---

## What is Fukuii?

A Scala EVM execution client. Built on Scala 3 LTS and Pekko Typed Actors, it runs any EVM-compatible network from a single binary. Ethereum Classic is the only Proof-of-Work EVM network, and Fukuii is its sole actively-developed native client, alongside full support for Ethereum mainnet and Sepolia via Engine API V1 through V4, and a network-family framework that hosts PoA consortium networks, sidechains, L2 rollups, and ZK-EVM families.

One binary. PoW ETChash and PoS Engine API. ETC, ETH, Mordor, Sepolia, and growing.

## Built to the EVM standard.

Implements the same open wire protocols, sync strategy, and Engine API as every other EVM client, verified byte-exact against the public specification.

- Engine API V1–V4
- SNAP sync
- ETH68 / ETH69 wire protocols
- Built-in MCP server
- Prometheus + Grafana out of the box

## The JVM advantage

Running on the JVM, Fukuii's stack aligns natively with the infrastructure of modern finance: the trading systems, clearing engines, and custody platforms that already run on the JVM. No FFI bridges. No language boundary overhead. Fukuii is designed to serve institutions running JVM infrastructure as a first-class dependency, not a bolted-on integration.

## Quick start

```bash
# Download the latest release
curl -LO https://github.com/chippr-robotics/fukuii/releases/latest/download/fukuii.jar

# Sync Mordor testnet (SNAP)
java -jar fukuii.jar --network mordor --sync snap
```

See the [installation guide](https://fukuii.com/guide) for Docker, Engine API mode, and hardware requirements.

## Architecture

Three layers, cleanly separated: a chain-agnostic EVM core (`fukuii-core`), a network and infrastructure layer (`fukuii-env`), and a consensus module built for pluggability. ETChash, the Engine API, PoA, L2 rollup derivation, and ZK-EVM families are all hosted behind the same interface, selected per deployment.

[Architecture →](https://fukuii.com/architecture) · [Networks →](https://fukuii.com/#networks)

## Run a node. Tell us what you see.

Fukuii is in beta. Operator feedback shapes the road: sync behavior, peering, resource profiles, the things only a running node reveals.

[Report an issue](https://github.com/chippr-robotics/fukuii/issues) · [Join discussions](https://github.com/chippr-robotics/fukuii/discussions)

## Website

The site at fukuii.com is an Astro 5 static build, deployed to GitHub Pages via `.github/workflows/deploy-pages.yml` on every push to `main`. No client framework runtime; any interactivity is a small vanilla-JS script scoped to its own component.

```bash
pnpm install          # install deps
pnpm dev              # dev server -> localhost:4321
pnpm build            # astro check + static build -> dist/
pnpm preview           # serve the production build locally
pnpm lint              # ESLint
pnpm typecheck         # astro check
```

## License

Apache 2.0, maintained by [Chippr Robotics LLC](https://github.com/chippr-robotics).
