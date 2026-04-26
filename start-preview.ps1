$ErrorActionPreference = "Stop"

$port = 5500
$url = "http://localhost:$port"

function Start-PreviewServer {
    param(
        [string]$Command,
        [string[]]$Arguments
    )

    Write-Host "Starting preview server on $url using $Command ..."
    Start-Process $Command -ArgumentList $Arguments -WorkingDirectory $PSScriptRoot
    Start-Sleep -Seconds 2
    Start-Process $url
}

if (Get-Command python -ErrorAction SilentlyContinue) {
    Start-PreviewServer -Command "python" -Arguments @("preview_server.py")
    exit 0
}

if (Get-Command py -ErrorAction SilentlyContinue) {
    Start-PreviewServer -Command "py" -Arguments @("preview_server.py")
    exit 0
}

if (Get-Command npx -ErrorAction SilentlyContinue) {
    Start-PreviewServer -Command "npx" -Arguments @("serve", ".", "-l", "$port")
    exit 0
}

Write-Error "No local server command found. Install Python or Node.js, then run this script again."
