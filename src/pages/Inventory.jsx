export default function Inventory() {
  return (
    <div className="page">
      <h2>Inventory Management</h2>

      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Stock</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Rice 5kg</td>
            <td>120</td>
            <td>Healthy</td>
          </tr>
          <tr>
            <td>Milk 1L</td>
            <td>6</td>
            <td>Low Stock</td>
          </tr>
        </tbody>
      </table>

      <div className="ai-box">
        AI-based stock status will be shown here.
      </div>
    </div>
  );
}
