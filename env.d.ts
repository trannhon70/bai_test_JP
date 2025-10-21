interface ImportMetaEnv {
    readonly VITE_API_URL: string;
    readonly VITE_APP_TITLE: string;
    // 👆 Thêm các biến môi trường bạn sử dụng ở đây
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}