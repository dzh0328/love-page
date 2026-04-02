# Love Page Deployment

这是一个纯静态网页项目，可以直接部署到 GitHub Pages、Cloudflare Pages 或任何静态托管服务。

## 项目特点

- `index.html` 为单入口
- `styles.css` 和 `script.js` 为主逻辑
- 总览页使用 `assets/generated/personal-thumbs/` 下的缩略图
- 详情页使用 `assets/generated/personal-full/` 下的原图

## 本地预览

在项目目录运行：

```bash
python3 -m http.server 8000
```

然后打开：

```text
http://127.0.0.1:8000
```

## GitHub Pages

这个项目已经包含 GitHub Pages 的自动部署文件：

- `.github/workflows/pages.yml`
- `.nojekyll`

发布流程：

1. 初始化并推送到 GitHub 仓库
2. 仓库默认分支使用 `main`
3. 在 GitHub 仓库设置里打开 `Pages`
4. Build and deployment 选择 `GitHub Actions`
5. 之后每次推送到 `main` 都会自动发布

首次发布完成后，GitHub 会给你一个公开网址。

## Cloudflare Pages

1. 新建一个 Git 仓库并上传这个项目
2. 在 Cloudflare Pages 里连接该仓库
3. Framework preset 选择 `None`
4. Build command 留空
5. Output directory 填 `/`
6. 点击部署

## 注意

- 这个项目已经不再依赖你本机 iCloud 路径
- 只要把整个项目目录上传，别人就能正常访问图片
- 原图较多，仓库体积会比较大；如果只想展示网页效果，可以只保留缩略图并去掉详情页原图
- 如果这台机器还没登录 GitHub，可以先运行 `gh auth login`
