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

function toggleNav() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}