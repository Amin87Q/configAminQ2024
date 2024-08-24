function copyConfig(configId) {
    const configText = document.getElementById(configId);
    configText.select();
    configText.setSelectionRange(0, 99999); // برای دستگاه‌های موبایل

    navigator.clipboard.writeText(configText.value).then(() => {
        alert("کانفیگ کپی شد!");
    }).catch(err => {
        alert("مشکلی پیش آمد. لطفاً دستی کپی کنید.");
    });
}

function copyLink(linkId) {
    const linkText = document.getElementById(linkId);
    linkText.select();
    linkText.setSelectionRange(0, 99999); // برای دستگاه‌های موبایل

    navigator.clipboard.writeText(linkText.value).then(() => {
        alert("لینک کپی شد!");
    }).catch(err => {
        alert("مشکلی پیش آمد. لطفاً دستی کپی کنید.");
    });
}

function showConfigSection() {
    document.getElementById('main-menu').classList.add('hidden');
    document.getElementById('config-section').classList.remove('hidden');
}

function showSubLinkSection() {
    document.getElementById('main-menu').classList.add('hidden');
    document.getElementById('sub-link-section').classList.remove('hidden');
}

function goBack() {
    document.getElementById('config-section').classList.add('hidden');
    document.getElementById('sub-link-section').classList.add('hidden');
    document.getElementById('main-menu').classList.remove('hidden');
}
