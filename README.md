# mini_program_demo
微信小程序官方组件的学习与使用
## 基础组件
+ *text*
  
<table>
<thead>
<tr><th>属性名</th><th>类型</th><th>默认值</th><th>说明</th></tr>
</thead>
<tbody>
<tr><td>selectable</td><td>Boolean</td><td>false</td><td>文本是否可选</td></tr>
<tr><td>space</td><td>String</td><td>false</td><td>显示连续空格</td></tr>
<tr><td>decode</td><td>Boolean</td><td>false</td><td>是否解码</td></tr>
</tbody>
</table>

*space有效值
<table>
<thead>
<tr><th>值</th><th>说明</th></tr>
</thead>
<tbody>
<tr><td>ensp</td><td>中文字符空格一半大小</td></tr>
<tr><td>emsp</td><td>中文字符空格大小</td></tr>
<tr><td>nbsp</td><td>根据字体设置的空格大小</td></tr>
</tbody>
</table>

+ *icon*
<table>
<thead>
<tr><th>属性名</th><th>类型</th><th>默认值</th><th>说明</th></tr>
</thead>
<tbody>
<tr><td>type</td><td>String</td><td></td><td>icon的类型，有效值：success, success_no_circle, info, warn, waiting, cancel, download, search, clear</td></tr>
<tr><td>size</td><td>Number</td><td>23</td><td>icon的大小，单位px</td></tr>
<tr><td>color</td><td>Color</td><td></td><td>icon的颜色，同css的color</td></tr>
</tbody>
</table>


+ *progress*
