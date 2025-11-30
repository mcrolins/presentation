// dashboard.js
// Data taken from user's report
const topProducts = [
  ["Canon imageCLASS 2200 Advanced Copier", 61599.82],
  ["Fellowes PB500 Electric Punch Binding Machine", 27453.38],
  ["Cisco TelePresence System EX90", 22638.48],
  ["HON 5400 Series Task Chairs", 21870.58],
  ["GBC DocuBind TL300 Binding System", 19823.48],
  ["GBC Ibimaster 500 Manual ProClick", 19024.50],
  ["HP LaserJet 3310 Copier", 18839.69],
  ["HP DesignJet T520 Large Format Printer", 18374.90],
  ["GBC DocuBind P400 Electric Binding System", 17965.07],
  ["High-Speed Automatic Electric Letter Opener", 17030.31]
];

// Monthly sales (user-provided)
const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
const monthlySales = [91982,59371,197573,134988,154086,145837,145535,157315,300103,199496,345041,321275];

// Weekday sales (user-provided)
const weekdays = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
const weekdaySales = [346404,416131,315683,141544,234073,420901,377868];

// Utility: format currency
function formatUSD(n){
  return n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits:2});
}

// Populate KPIs
document.addEventListener("DOMContentLoaded", function(){
  // KPI revenue = sum of monthlySales
  const totalRevenue = monthlySales.reduce((a,b)=>a+b,0);
  document.getElementById("kpi-revenue").textContent = formatUSD(totalRevenue);
  document.getElementById("kpi-top-product").textContent = topProducts[0][0];
  // peak month
  const peakIndex = monthlySales.indexOf(Math.max(...monthlySales));
  document.getElementById("kpi-peak-month").textContent = months[peakIndex];
  // top weekday
  const topWeekdayIdx = weekdaySales.indexOf(Math.max(...weekdaySales));
  document.getElementById("kpi-top-weekday").textContent = weekdays[topWeekdayIdx];

  // populate top products table
  const tbody = document.querySelector("#topProductsTable tbody");
  topProducts.forEach(row=>{
    const tr = document.createElement("tr");
    tr.innerHTML = `<td>${row[0]}</td><td class="text-end">${formatUSD(row[1])}</td>`;
    tbody.appendChild(tr);
  });

  // Monthly chart
  const monthlyCtx = document.getElementById("monthlyChart").getContext("2d");
  new Chart(monthlyCtx, {
    type: "bar",
    data: {
      labels: months,
      datasets: [{
        label: "Sales (USD)",
        data: monthlySales,
        borderRadius: 6,
        backgroundColor: "rgba(33, 37, 41, 0.85)",
        hoverBackgroundColor: "rgba(33, 37, 41, 1)"
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display:false }
      },
      scales: {
        y: {
          ticks: { callback: value => '$' + (value/1000) + "k" }
        }
      }
    }
  });

  // Weekday chart (horizontal)
  const weekdayCtx = document.getElementById("weekdayChart").getContext("2d");
  new Chart(weekdayCtx, {
    type: "bar",
    data: {
      labels: weekdays,
      datasets: [{
        label: "Sales (USD)",
        data: weekdaySales,
        backgroundColor: [
          "#6c757d","#6c757d","#6c757d","#ff7f0e","#6c757d","#6c757d","#6c757d"
        ]
      }]
    },
    options: {
      indexAxis: "y",
      responsive: true,
      plugins: { legend: { display:false } },
      scales: {
        x: { ticks: { callback: v => '$' + (v/1000) + "k" } }
      }
    }
  });

  // Insights population (simple)
  const insights = [
    "Top products (e.g., Canon imageCLASS 2200) should be prioritized for promotions and inventory.",
    "Peak sales occur Sep–Dec (Nov highest). Increase campaigns and stock ahead of September.",
    "Lowest sales in Feb. Consider targeted discounts or promotions in slow months.",
    "Weekend/Tuesday spikes suggest running targeted weekend and mid-week campaigns."
  ];
  const list = document.getElementById("insights-list");
  insights.forEach(i => {
    const li = document.createElement("li");
    li.textContent = i;
    list.appendChild(li);
  });

  // Toggle insights
  document.getElementById("show-insights").addEventListener("click", function(){
    document.getElementById("insights").classList.toggle("d-none");
  });

  // CSV download (simple)
  document.getElementById("download-csv").addEventListener("click", function(){
    // create CSV string from monthlySales and topProducts
    let csv = "Type,Label,Value\n";
    months.forEach((m,i)=> csv += `Month,${m},${monthlySales[i]}\n`);
    csv += "\nProduct,Sales\n";
    topProducts.forEach(p=> csv += `"${p[0]}",${p[1]}\n`);
    const blob = new Blob([csv], {type: 'text/csv;charset=utf-8;'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url; a.download = "superstore_summary.csv"; document.body.appendChild(a); a.click();
    URL.revokeObjectURL(url); a.remove();
  });

}); // DOMContentLoaded
