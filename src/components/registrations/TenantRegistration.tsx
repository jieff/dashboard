import React, { useState } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const TenantRegistration: React.FC = () => {
  const [tenantData, setTenantData] = useState({
    name: '',
    age: '',
    idNumber: '',
    address: '',
    rentalAmount: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTenantData({ ...tenantData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica de envio dos dados para um backend, se necessário
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    const element = document.getElementById('pdf-content');
    if (element) {
      html2canvas(element).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const imgWidth = 210; // Largura A4
        const pageHeight = 295; // Altura A4
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        let heightLeft = imgHeight;
        let position = 0;

        doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;

        while (heightLeft >= 0) {
          position = heightLeft - imgHeight;
          doc.addPage();
          doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
          heightLeft -= pageHeight;
        }

        doc.save('contrato-aluguel.pdf');
      });
    }
  };

  return (
    <div>
      <h2>Cadastro de Inquilino</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nome"
          value={tenantData.name}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="age"
          placeholder="Idade"
          value={tenantData.age}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="idNumber"
          placeholder="Número de Identidade"
          value={tenantData.idNumber}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="address"
          placeholder="Endereço"
          value={tenantData.address}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="rentalAmount"
          placeholder="Valor do Aluguel"
          value={tenantData.rentalAmount}
          onChange={handleChange}
          required
        />
        <button type="submit">Cadastrar</button>
      </form>

      <div id="pdf-content" style={{ marginTop: '20px' }}>
        <h3>Contrato de Aluguel</h3>
        <p>Nome: {tenantData.name}</p>
        <p>Idade: {tenantData.age}</p>
        <p>Número de Identidade: {tenantData.idNumber}</p>
        <p>Endereço: {tenantData.address}</p>
        <p>Valor do Aluguel: R$ {tenantData.rentalAmount}</p>
      </div>

      <button onClick={generatePDF} style={{ marginTop: '20px', padding: '10px', backgroundColor: '#4CAF50', color: 'white' }}>
        Gerar PDF
      </button>
    </div>
  );
};

export default TenantRegistration;
