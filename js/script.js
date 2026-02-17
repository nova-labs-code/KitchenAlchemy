// Toggle Day Sections
function showDay(dayNumber) {
  document.querySelectorAll('.day-section').forEach(section => {
    section.classList.remove('active');
  });
  const activeDay = document.getElementById(`day${dayNumber}`);
  if (activeDay) activeDay.classList.add('active');
}

// Optional: generate week buttons dynamically (for homepage or weekly nav)
function generateWeekButtons(containerId, totalWeeks = 26) {
  const container = document.getElementById(containerId);
  if (!container) return;
  for (let i = 1; i <= totalWeeks; i++) {
    const btn = document.createElement('button');
    btn.textContent = `Week ${i}`;
    btn.onclick = () => window.location.href = `weeks/week${i}.html`;
    container.appendChild(btn);
  }
}

// Optional: generate day buttons for a week
function generateDayButtons(containerId, daysInWeek = 7) {
  const container = document.getElementById(containerId);
  if (!container) return;
  for (let i = 1; i <= daysInWeek; i++) {
    const btn = document.createElement('button');
    btn.textContent = `Day ${i}`;
    btn.onclick = () => showDay(i);
    container.appendChild(btn);
  }
}

// Example usage for a week page
document.addEventListener('DOMContentLoaded', () => {
  generateDayButtons('dayButtons');
  showDay(1); // show Day 1 by default
});