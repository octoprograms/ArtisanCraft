# ArtisanCraft - Token Marketplace

Welcome to ArtisanCraft, a unique marketplace for discovering and purchasing handmade treasures using ArtisanCraft Tokens (ACT). This project provides a platform for artisans to showcase their creations and for users to buy exclusive items using cryptocurrency.

## Features

- **Responsive Design**: The layout adjusts seamlessly across different screen sizes.
- **Wallet Integration**: Connect your wallet to manage and spend your ArtisanCraft Tokens.
- **Product Listings**: Browse through a variety of handmade items, each with detailed descriptions and prices in ACT.

## HTML Code

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ArtisanCraft - Token Marketplace</title>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <style>
        /* CSS styles here */
    </style>
</head>
<body>
    <nav class="navbar">
        <div class="logo">ArtisanCraft</div>
        <div class="search-bar">
            <input type="text" class="search-input" placeholder="Search handmade items...">
        </div>
        <div class="wallet-section">
            <div class="token-balance">0.00 ACT</div>
            <div class="connect-wallet" onclick="connectWallet()">Connect Wallet</div>
        </div>
    </nav>

    <section class="hero-section">
        <h1 class="hero-title">Discover Unique Handmade Treasures</h1>
        <p class="hero-subtitle">Shop exclusive artisan creations using ArtisanCraft Tokens (ACT)</p>
    </section>

    <div class="products-grid">
        <div class="product-card">
            <img src="https://via.placeholder.com/300x250" alt="Product" class="product-image">
            <div class="product-details">
                <h3>Handcrafted Ceramic Vase</h3>
                <p class="product-price">45.50 ACT</p>
                <button class="buy-button" onclick="handleBuy()">Purchase</button>
            </div>
        </div>
        <!-- Add more product cards similarly -->
    </div>

    <script>
        function connectWallet() {
            // Simulated wallet connection
            document.querySelector('.token-balance').innerText = '150.00 ACT';
            document.querySelector('.connect-wallet').innerText = '0x1234...5678';
            alert('Wallet connected successfully!');
        }

        function handleBuy() {
            const isConnected = document.querySelector('.connect-wallet').innerText !== 'Connect Wallet';
            
            if (!isConnected) {
                alert('Please connect your wallet first!');
                return;
            }
            
            // Simulated purchase
            if (confirm('Confirm purchase?')) {
                alert('Purchase successful! NFT transferred to your wallet.');
            }
        }
    </script>
</body>
</html>
```

## How to Use

1. **Clone the Repository**: Clone this repository to your local machine using `git clone`.
2. **Open the HTML File**: Open the `index.html` file in your preferred web browser.
3. **Connect Wallet**: Click on the "Connect Wallet" button to simulate wallet connection.
4. **Browse Products**: Explore the products listed and click "Purchase" to simulate buying an item.

## Contributing

We welcome contributions! Please fork the repository and submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License.
