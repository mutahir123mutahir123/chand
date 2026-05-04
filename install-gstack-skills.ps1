# install-gstack-skills.ps1
# Copies gstack SKILL.md files from C:\Users\Danish\gstack\ to C:\Users\Danish\.claude\skills\
# Run this script in PowerShell: .\install-gstack-skills.ps1

$gstackRoot = "C:\Users\Danish\gstack"
$skillsRoot = "C:\Users\Danish\.claude\skills"

$skills = @(
    "autoplan",
    "benchmark",
    "benchmark-models",
    "browse",
    "canary",
    "careful",
    "codex",
    "context-restore",
    "context-save",
    "cso",
    "design-consultation",
    "design-html",
    "design-review",
    "design-shotgun",
    "devex-review",
    "document-release",
    "freeze",
    "gstack-upgrade",
    "guard",
    "health",
    "investigate",
    "land-and-deploy",
    "landing-report",
    "learn",
    "make-pdf",
    "office-hours",
    "open-gstack-browser",
    "pair-agent",
    "plan-ceo-review",
    "plan-design-review",
    "plan-devex-review",
    "plan-eng-review",
    "plan-tune",
    "qa",
    "qa-only",
    "retro",
    "review",
    "setup-browser-cookies",
    "setup-deploy",
    "setup-gbrain",
    "ship",
    "unfreeze"
)

$copied = 0
$skipped = 0
$errors = 0

Write-Host "Installing gstack skills to $skillsRoot ..." -ForegroundColor Cyan
Write-Host ""

# Copy root SKILL.md -> gstack/SKILL.md
$rootSrc = Join-Path $gstackRoot "SKILL.md"
$rootDst = Join-Path $skillsRoot "gstack\SKILL.md"
if (Test-Path $rootSrc) {
    $rootDir = Split-Path $rootDst -Parent
    if (-not (Test-Path $rootDir)) {
        New-Item -ItemType Directory -Path $rootDir -Force | Out-Null
    }
    Copy-Item -Path $rootSrc -Destination $rootDst -Force
    Write-Host "  [OK] gstack/SKILL.md" -ForegroundColor Green
    $copied++
} else {
    Write-Host "  [SKIP] gstack/SKILL.md (source not found)" -ForegroundColor Yellow
    $skipped++
}

foreach ($skill in $skills) {
    $src = Join-Path $gstackRoot "$skill\SKILL.md"
    $dst = Join-Path $skillsRoot "$skill\SKILL.md"

    if (Test-Path $src) {
        $dstDir = Split-Path $dst -Parent
        if (-not (Test-Path $dstDir)) {
            New-Item -ItemType Directory -Path $dstDir -Force | Out-Null
        }
        Copy-Item -Path $src -Destination $dst -Force
        Write-Host "  [OK] $skill/SKILL.md" -ForegroundColor Green
        $copied++
    } else {
        Write-Host "  [SKIP] $skill/SKILL.md (source not found)" -ForegroundColor Yellow
        $skipped++
    }
}

Write-Host ""
Write-Host "Done. Copied: $copied  Skipped: $skipped  Errors: $errors" -ForegroundColor Cyan
