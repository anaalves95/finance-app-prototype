document.addEventListener('DOMContentLoaded', () => {
    const screens = document.querySelectorAll('.screen');
    let currentScreen = 0;
    let selectedGoal = '';

    // Navegação
    function showScreen(index) {
        screens.forEach(s => s.classList.remove('active'));
        screens[index].classList.add('active');
        currentScreen = index;
    }

    // Botão Começar
    document.getElementById('start-btn').addEventListener('click', () => showScreen(1));

    // Questionário
    document.getElementById('quiz-form').addEventListener('submit', (e) => {
        e.preventDefault();
        // Simular progresso e diagnóstico
        document.getElementById('progress').style.width = '100%';
        setTimeout(() => showScreen(2), 500);
    });

    // Selecionar meta
    document.querySelectorAll('.goal-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            selectedGoal = btn.dataset.goal;
            document.querySelectorAll('.goal-btn').forEach(b => b.style.background = '#007bff');
            btn.style.background = '#28a745';
        });
    });

    // Próximo para plano
    document.getElementById('next-to-plan').addEventListener('click', () => {
        const planContent = document.getElementById('plan-content');
        if (selectedGoal === 'economizar') {
            planContent.innerHTML = '<p>Gráfico Pizza: Gastos vs Economia. Meta mensal: R$ 500.</p>';
        } else if (selectedGoal === 'viajar') {
            planContent.innerHTML = '<p>Checklist de Viagem + Barra de Progresso.</p>';
        } // Adicione mais lógicas para outras metas
        showScreen(3);
    });

    // Próximo para dashboard
    document.getElementById('next-to-dashboard').addEventListener('click', () => showScreen(4));

    // Reiniciar
    document.getElementById('back-to-start').addEventListener('click', () => showScreen(0));
});