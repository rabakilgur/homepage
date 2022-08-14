var cssThatWillBeInserted = document.createElement("style");
cssThatWillBeInserted.type = "text/css";
cssThatWillBeInserted.innerHTML = `

*::-webkit-scrollbar {
    width: 12px !important;
    height: 12px !important;
    background: #1e1e1e !important;
    border: 1px solid #252525 !important;
}
*::-webkit-scrollbar-corner,
*::-webkit-scrollbar-track {
    background: #1e1e1e !important;
}
*::-webkit-scrollbar-thumb,
*::-webkit-scrollbar-track {
    border: 0 !important;
    box-shadow: none !important;
}
*::-webkit-scrollbar-thumb {
    min-height: 28px !important;
    background: #333 !important;
}
*::-webkit-scrollbar-thumb:hover {
    background: #444 !important;
}
*::-webkit-scrollbar-thumb:active {
    background: #555 !important;
}
*::-webkit-scrollbar-button {
    display: none !important;
}

`;
try {
    document.body.appendChild(cssThatWillBeInserted);
} catch(e) {
    $(document).ready(function() {
        document.body.appendChild(cssThatWillBeInserted);
    });
}
