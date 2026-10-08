# StreamP2P Ultra (Aceleração por Hardware GPU)

Aplicativo completo em **apenas 1 arquivo HTML** (`index.html`) para transmissão de tela com baixa latência, sistema de amigos e aceleração via Placa de Vídeo (NVENC / AMD AMF / Intel QuickSync).

---

## 🚀 Como Publicar no Render.com (100% Grátis e Público)

O **Render.com** permite hospedar sites estáticos gratuitamente com HTTPS obrigatório (necessário para o navegador liberar o compartilhamento de tela via WebRTC):

### Passo a Passo:
1. Crie um repositório no seu **GitHub** (ex: `meu-stream-p2p`).
2. Suba o arquivo `index.html` para a raiz do repositório.
3. Acesse [render.com](https://render.com) e faça login.
4. Clique no botão **New +** no canto superior direito e selecione **Static Site**.
5. Conecte sua conta do GitHub e selecione o repositório que você acabou de criar.
6. Configure os campos:
   - **Name**: Escolha um nome (ex: `stream-amigos`)
   - **Build Command**: Deixe em **branco**
   - **Publish Directory**: Digite `.` (ou deixe em branco)
7. Clique em **Create Static Site**.
8. Pronto! Em menos de 1 minuto seu site estará online em uma URL pública como:
   `https://stream-amigos.onrender.com`

---

## ⚡ Como Funciona a Aceleração por Placa de Vídeo (Zero Lag na CPU)

1. **Priorização do Codec H.264 (NVENC / AMD)**:
   - O código reordena as preferências de codecs do WebRTC (`setCodecPreferences`) para colocar o H.264 no topo. Praticamente todas as placas de vídeo modernas (Nvidia, AMD e Intel) possuem chips dedicados de codificação e decodificação por hardware (NVENC/VCE/QuickSync).
   - Isso evita que o processador (CPU) precise renderizar quadros em software (como o libvpx/software H.264), liberando a CPU para jogos ou outras tarefas pesadas.
2. **`contentHint = 'motion'`**:
   - Informa ao motor gráfico do navegador para priorizar interpolação de movimento e 60 FPS estáveis na GPU.
3. **Composição em Camadas de GPU**:
   - O player de vídeo utiliza aceleração CSS por hardware (`transform: translate3d(0, 0, 0); will-change: transform;`) forçando o pipeline D3D11 / Vulkan.
