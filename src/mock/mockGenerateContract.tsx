import { useState } from 'react';

// Função mock para simular o backend que gera o PDF
const mockGenerateContract = async (tenantData: any) => {
  return new Promise<Blob>((resolve) => {
    // Simulando um atraso do servidor
    setTimeout(() => {
      // Criar um mock de um arquivo PDF como Blob
      const pdfContent = `
        CONTRATO DE LOCAÇÃO RESIDENCIAL

        Inquilino: ${tenantData.name}
        CPF: ${tenantData.cpf}
        Endereço do Imóvel: ${tenantData.address}
        Período de Locação: ${tenantData.rentalPeriod}
        Valor do Aluguel: R$ ${tenantData.rentAmount}
      `;

      const blob = new Blob([pdfContent], { type: 'application/pdf' });
      resolve(blob);
    }, 1000); // Simula 1 segundo de tempo de resposta
  });
};

const TenantForm = () => {
  const [tenantData, setTenantData] = useState({
    name: '',
    cpf: '',
    address: '',
    rentalPeriod: '',
    rentAmount: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTenantData({ ...tenantData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Usa a função mock para simular a geração do contrato
    const blob = await mockGenerateContract(tenantData);
    
    // Download do arquivo gerado (simulado como PDF)
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Contrato_Residencial_Mock.pdf';
    document.body.appendChild(a);
    a.click();
    a.remove();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nome do Inquilino:</label>
        <input
          type="text"
          name="name"
          value={tenantData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>CPF:</label>
        <input
          type="text"
          name="cpf"
          value={tenantData.cpf}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Endereço do Imóvel:</label>
        <input
          type="text"
          name="address"
          value={tenantData.address}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Período de Locação:</label>
        <input
          type="text"
          name="rentalPeriod"
          value={tenantData.rentalPeriod}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Valor do Aluguel:</label>
        <input
          type="number"
          name="rentAmount"
          value={tenantData.rentAmount}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Gerar Contrato (Mock)</button>
    </form>
  );
};

export default TenantForm;
