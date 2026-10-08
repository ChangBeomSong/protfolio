# 송창범 개발자 포트폴리오

서비스의 구현부터 배포까지 경험한 개발자 송창범의 개인 포트폴리오입니다.

목표 주소: https://ChangBeomSong.github.io/protfolio/

## 구성
React + TypeScript + Vite 기반의 한 페이지 사이트입니다. Home / About / Projects / Skills / Contact, 모바일 메뉴, 상세 펼치기, 캡처 확대 기능을 제공합니다. COREWORK와 맛침내는 팀 프로젝트이며, 페이지에는 직접 담당한 기능을 구분해 표시합니다.

## 내 컴퓨터에서 실행
Node.js 22.12 이상(22 LTS 권장)을 설치하고 이 폴더를 VS Code로 엽니다. 터미널에서:

```bash
npm ci
npm run dev
```

터미널에 표시된 주소로 접속합니다. `/protfolio/`를 포함한 주소를 사용합니다. 코드를 저장하면 화면에 반영됩니다.

```bash
npm run build
npm run preview
```

첫 명령은 TypeScript 검사와 배포용 빌드를 수행하고, 두 번째는 빌드 결과를 확인합니다.

## 수정할 파일
| 수정 내용 | 파일 |
| --- | --- |
| 메인 문구와 첫 화면 | `src/sections/HeroSection.tsx` |
| 자기소개·프로필 사진 | `src/sections/AboutSection.tsx` |
| 프로젝트 설명·역할·기술·상세 내용 | `src/data/projects.ts` |
| 프로젝트 배치·대표 이미지 | `src/sections/ProjectsSection.tsx` |
| 캡처 순서·제목·파일명 | `src/data/captures.ts` |
| 기술 분류 | `src/sections/SkillsSection.tsx` |
| 이메일·GitHub | `src/sections/ContactSection.tsx` |
| 상단 메뉴·하단 문구 | `src/App.tsx` |
| 색상·여백·폰트·모바일 배치 | `src/styles/global.css` |
| 사진 원본 | `public/images/` |
| 저장소별 배포 경로 | `vite.config.ts` |
| 자동 배포 | `.github/workflows/deploy.yml` |

새 사진은 `public/images/corework/` 또는 `public/images/matchimnae/`에 넣고 `captures.ts`의 파일명을 맞춥니다. 현재 캡처는 PNG입니다. JPG 등 다른 확장자로 변경한다면 `Screenshot.tsx`의 `.png` 부분도 함께 변경합니다. `src/lib/asset.ts`가 `/protfolio/` 배포 경로를 붙이므로 이미지 경로를 임의로 `/images/...`로 쓰지 마세요.

## GitHub 업로드 및 배포
1. ZIP을 풀고 **안의 파일·폴더**를 `ChangBeomSong/protfolio` 저장소 최상위에 업로드합니다. `package.json`, `src`, `public`, `.github`가 같은 위치에 있어야 합니다.
2. 이번 ZIP은 개발 원본입니다. 이전 실행용 ZIP의 `index.html`, `README.md`는 이번 파일로 교체합니다. 이전 최상위 `assets/`, `images/`, `favicon.svg`는 새 구성에서 사용하지 않으므로 이미 올렸다면 제거해도 됩니다. 기존 다른 프로젝트 파일은 보존하세요.
3. **Settings → Pages → Source → GitHub Actions**를 선택합니다. 이전에 안내한 'Deploy from a branch'와 다른 설정입니다.
4. **Actions** 탭에서 'Deploy portfolio to GitHub Pages' 실행을 확인합니다. 필요하면 Run workflow를 누릅니다.
5. 성공하면 목표 주소로 접속합니다. 이후 main 브랜치에 수정 내용을 올릴 때마다 자동으로 빌드·배포합니다.

### 웹 업로드 주의
`.github` 폴더도 반드시 올려야 합니다. 업로드에서 빠졌다면 Add file → Create new file로 `.github/workflows/deploy.yml`을 만들고 ZIP 안의 동명 파일 내용을 붙여넣습니다. 저장소 기본 브랜치가 main이 아니라면 deploy.yml의 branches를 실제 브랜치명으로 변경합니다.

Git 명령을 사용한다면 로컬 저장소에서 파일을 복사한 다음:

```bash
git add .
git commit -m "Add React portfolio source and Pages deployment"
git push origin main
```

저장소 이름을 변경하면 `vite.config.ts`의 base도 함께 수정합니다. 현재 저장소 이름 `protfolio`는 입력한 이름 그대로 사용했습니다.

## 제작 과정
포트폴리오 소개 사이트의 초기 구현·정리에는 AI 도구의 도움을 사용했습니다. 소개된 팀 프로젝트의 담당 기능과 이 소개 사이트의 제작 과정을 구분합니다. 팀 프로젝트 원본 저장소 링크는 확인 후 별도로 추가할 수 있습니다.

## 확인 상태
TypeScript 검사, Vite 빌드 및 이미지 경로 검사를 완료했습니다. 실제 GitHub Actions 배포는 사용자가 저장소에 업로드한 후 실행됩니다. 이 패키지 생성 과정에서 실제 브라우저의 시각 검증은 수행하지 않았습니다.
