let arr = []
for (let i = 1; i <= 4; i++) {
  arr.push(prompt(`请输入第${i}季度的数据`))
}
document.writeln(`<div class="box">`)
for (let i = 0; i < arr.length; i++) {
  document.writeln(`
    <div style="height: ${arr[i]}px;">
    <span>${arr[i]}</span>
    <h4>第${i + 1}季度</h4>
  </div>
    `)
}
document.writeln(`</div>`)