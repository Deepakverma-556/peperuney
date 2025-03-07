import { Discord, Telegram, Twitter } from "./icons";
import coin from "../../public/assets/images/png/coin.png"
import dex from "../../public/assets/images/png/dex.png"
import dexTools from "../../public/assets/images/png/dex-tools.png"

export const HEADER_ICONS_LIST = [
    {
        icon: <Twitter />,
        link: 'https://x.com/?lang=en'
    },
    {
        icon: <Telegram />,
        link: 'https://web.telegram.org/'
    },
    {
        icon: <Discord />,
        link: 'https://discord.com/'
    },
]

export const MARQUEE_LIST = [
    "$PEPERUNEY",
    "$PEPERUNEY",
    "$PEPERUNEY",
    "$PEPERUNEY",
    "$PEPERUNEY",
    "$PEPERUNEY",
    "$PEPERUNEY",
    "$PEPERUNEY",
    "$PEPERUNEY",
    "$PEPERUNEY",
    "$PEPERUNEY",
    "$PEPERUNEY",
    "$PEPERUNEY",
    "$PEPERUNEY",
    "$PEPERUNEY",
    "$PEPERUNEY",
    "$PEPERUNEY",
    "$PEPERUNEY",
    "$PEPERUNEY",
    "$PEPERUNEY",
    "$PEPERUNEY",
    "$PEPERUNEY",
    "$PEPERUNEY",
]

export const HOW_TO_BUY_CARDS_LIST = [
    {
        title: "GET YOUR WALLET READY",
        description: "Set up Phantom Wallet and connect it to Solana. Make sure Solana’s locked and loaded as the active network."
    },
    {
        title: "FUND YOUR WALLET",
        description: "Load up on SOL from Coinbase, Binance, or OKX. Double-check your wallet address—no room for slip-ups."
    },
    {
        title: "GRAB THAT $PEPERUNEY",
        description: "Hit up a Solana DEX like Meteora or Jupiter, swap your SOL for $PepeRuney, and lock it in. Hell yeah!"
    },
]

export const PIZZANOMICS_ICONS_LIST = [
    {
        image: coin,
        imageAlt: "coin",
    },
    {
        image: dex,
        imageAlt: "dex",
    },
    {
        image: dexTools,
        imageAlt: "dex-tools",
    },
]