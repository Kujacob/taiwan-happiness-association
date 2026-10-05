# 正式網域與上線檢查表

本網站以 GitHub 為原始碼主體、Vercel 為主要部署平台。網域應由協會自行持有，DNS 僅指向部署平台，避免被單一服務商綁定。

## 購買網域前
- 使用協會可長期掌控的帳號購買網域。
- 啟用網域註冊商帳號的多因素驗證。
- 保留付款、註冊人與 DNS 管理權限。
- 決定正式主網址要使用 apex domain（例如 example.org.tw）或 www（例如 www.example.org.tw）。

## Vercel 接網域
1. 在 Vercel 專案 Settings → Domains 加入正式網域。
2. 依 Vercel 當下顯示的 DNS 記錄，到網域註冊商新增 A / CNAME 等記錄。
3. 同時加入 apex 與 www，並設定其中一個 301/308 redirect 到主要網址。
4. 確認 Vercel 已簽發 HTTPS 憑證。
5. 在 Vercel Environment Variables 設定：
   `NEXT_PUBLIC_SITE_URL=https://正式網域`
6. 重新部署一次。robots.txt、sitemap.xml、Open Graph metadata 會以正式網域產生。
7. 確認：
   - https://正式網域/
   - https://正式網域/robots.txt
   - https://正式網域/sitemap.xml
   - 中文與英文頁面
   - 手機版導覽
   - Facebook / LINE 等分享預覽

## 上線前 SEO
- 將正式 sitemap 提交至 Google Search Console。
- 驗證 Open Graph 圖片與標題。
- 每個主要頁面保留獨立 title / description。
- 正式網域確定後，不再以 vercel.app 網址作主要公開網址。

## 資安
- GitHub、Vercel、網域註冊商全部啟用 2FA / passkey。
- 不將 API key、密碼、資料庫憑證寫進 GitHub。
- Vercel 使用 Security Headers；正式站只使用 HTTPS。
- GitHub main 每次 push 會執行 QA、production build、a11y preflight 與 Lighthouse。
- GitHub Pages 僅作手動備援，不作主要正式主機。

## 無障礙與行動版
- 自動檢測以 WCAG 2.2 為目標基準；自動工具不能等同完整人工合規認證。
- 上線前需人工確認：鍵盤操作、焦點順序、文字放大 200%、手機直向/橫向、對比、替代文字、表單（未來若加入）。

## 未來活動報名
目前 v1 不建立會員或資料庫。未來加入活動報名時，應另行做：
- 個資蒐集最小化
- 隱私政策與告知同意
- 權限分層
- 身分驗證與密碼安全
- 後端、資料庫及備份策略
