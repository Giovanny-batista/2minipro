import React, { useState } from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
  background-color: #0076b6; /* Cor do IFPI */
  color: white;
  padding: 20px;
  border-radius: 5px;
`;

const Pergunta = styled.div`
  margin-bottom: 10px;
`;

const Resposta = styled.select`
  width: 100%;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const Comentario = styled.textarea`
  width: 100%;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
  height: 100px;
`;

const Botao = styled.button`
  background-color: #ff9900; /* Cor do IFPI */
  color: white;
  border: none;
  border-radius: 3px;
  padding: 10px 20px;
  cursor: pointer;
`;

const AvaliacaoProfessor = () => {
  const [professorSelecionado, setProfessorSelecionado] = useState('');
  const [respostas, setRespostas] = useState({
    conhecimento: '',
    clareza: '',
    disponibilidade: '',
    metodologia: '',
    comunicacao: '',
    organizacao: '',
    avaliacao: '',
    inovacao: '',
    ambiente: '',
    global: '',
    sugestoes: '',
  });

  const professores = [
    'Allan',
    'Carlos Estevão',
    'Eutino',
    'Felipe',
    'Karl',
  ];

  const handleProfessorChange = (valor) => {
    setProfessorSelecionado(valor);
  };

  const handleRespostaChange = (pergunta, valor) => {
    setRespostas({
      ...respostas,
      [pergunta]: valor,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Professor selecionado:', professorSelecionado);
    console.log('Respostas enviadas:', respostas);
  };

  return (
    <FormContainer>
      <h2>Avaliação do Professor - IFPI</h2>
      <form onSubmit={handleSubmit}>
        {/* Campo de seleção para escolher o professor */}
        <Pergunta>
          <label>Selecione o professor a ser avaliado:</label>
          <Resposta
            value={professorSelecionado}
            onChange={(e) => handleProfessorChange(e.target.value)}
            required
          >
            <option value="">Selecione um professor</option>
            {professores.map((professor, index) => (
              <option key={index} value={professor}>
                {professor}
              </option>
            ))}
          </Resposta>
        </Pergunta>

        {/* Perguntas */}
        <Pergunta>
          <label>
            1. O professor demonstrou profundo conhecimento sobre o assunto?
          </label>
          <Resposta
            value={respostas.conhecimento}
            onChange={(e) =>
              handleRespostaChange('conhecimento', e.target.value)
            }
            required
          >
            <option value="">Selecione</option>
            <option value="1">1 - Muito Fraco</option>
            <option value="2">2 - Fraco</option>
            <option value="3">3 - Regular</option>
            <option value="4">4 - Bom</option>
            <option value="5">5 - Excelente</option>
          </Resposta>
        </Pergunta>

        <Pergunta>
          <label>
            2. O professor foi capaz de explicar de forma clara e compreensível?
          </label>
          <Resposta
            value={respostas.clareza}
            onChange={(e) => handleRespostaChange('clareza', e.target.value)}
            required
          >
            <option value="">Selecione</option>
            <option value="1">1 - Muito Fraco</option>
            <option value="2">2 - Fraco</option>
            <option value="3">3 - Regular</option>
            <option value="4">4 - Bom</option>
            <option value="5">5 - Excelente</option>
          </Resposta>
        </Pergunta>

        <Pergunta>
          <label>
            3. O professor respondeu adequadamente às perguntas dos alunos?
          </label>
          <Resposta
            value={respostas.disponibilidade}
            onChange={(e) =>
              handleRespostaChange('disponibilidade', e.target.value)
            }
            required
          >
            <option value="">Selecione</option>
            <option value="1">1 - Muito Fraco</option>
            <option value="2">2 - Fraco</option>
            <option value="3">3 - Regular</option>
            <option value="4">4 - Bom</option>
            <option value="5">5 - Excelente</option>
          </Resposta>
        </Pergunta>

        <Pergunta>
          <label>
            4. O professor utilizou uma variedade de métodos de ensino (palestras, discussões, atividades práticas, multimídia etc.)?
          </label>
          <Resposta
            value={respostas.metodologia}
            onChange={(e) => handleRespostaChange('metodologia', e.target.value)}
            required
          >
            <option value="">Selecione</option>
            <option value="1">1 - Muito Fraco</option>
            <option value="2">2 - Fraco</option>
            <option value="3">3 - Regular</option>
            <option value="4">4 - Bom</option>
            <option value="5">5 - Excelente</option>
          </Resposta>
        </Pergunta>

        <Pergunta>
          <label>
            5. O professor estimulou a participação ativa dos alunos em sala de aula?
          </label>
          <Resposta
            value={respostas.comunicacao}
            onChange={(e) => handleRespostaChange('comunicacao', e.target.value)}
            required
          >
            <option value="">Selecione</option>
            <option value="1">1 - Muito Fraco</option>
            <option value="2">2 - Fraco</option>
            <option value="3">3 - Regular</option>
            <option value="4">4 - Bom</option>
            <option value="5">5 - Excelente</option>
          </Resposta>
        </Pergunta>

        <Pergunta>
          <label>
            6. O professor foi cortês e respeitoso com os alunos?
          </label>
          <Resposta
            value={respostas.organizacao}
            onChange={(e) => handleRespostaChange('organizacao', e.target.value)}
            required
          >
            <option value="">Selecione</option>
            <option value="1">1 - Muito Fraco</option>
            <option value="2">2 - Fraco</option>
            <option value="3">3 - Regular</option>
            <option value="4">4 - Bom</option>
            <option value="5">5 - Excelente</option>
          </Resposta>
        </Pergunta>

        <Pergunta>
          <label>
            7. As expectativas em relação às tarefas, avaliações e cronograma do curso foram claras?
          </label>
          <Resposta
            value={respostas.avaliacao}
            onChange={(e) => handleRespostaChange('avaliacao', e.target.value)}
            required
          >
            <option value="">Selecione</option>
            <option value="1">1 - Muito Fraco</option>
            <option value="2">2 - Fraco</option>
            <option value="3">3 - Regular</option>
            <option value="4">4 - Bom</option>
            <option value="5">5 - Excelente</option>
          </Resposta>
        </Pergunta>

        <Pergunta>
          <label>
            8. As avaliações (provas, trabalhos, projetos) foram justas e representativas do conteúdo do curso?
          </label>
          <Resposta
            value={respostas.inovacao}
            onChange={(e) => handleRespostaChange('inovacao', e.target.value)}
            required
          >
            <option value="">Selecione</option>
            <option value="1">1 - Muito Fraco</option>
            <option value="2">2 - Fraco</option>
            <option value="3">3 - Regular</option>
            <option value="4">4 - Bom</option>
            <option value="5">5 - Excelente</option>
          </Resposta>
        </Pergunta>

        <Pergunta>
          <label>
            9. O professor trouxe abordagens inovadoras para o ensino do conteúdo?
          </label>
          <Resposta
            value={respostas.ambiente}
            onChange={(e) => handleRespostaChange('ambiente', e.target.value)}
            required
          >
            <option value="">Selecione</option>
            <option value="1">1 - Muito Fraco</option>
            <option value="2">2 - Fraco</option>
            <option value="3">3 - Regular</option>
            <option value="4">4 - Bom</option>
            <option value="5">5 - Excelente</option>
          </Resposta>
        </Pergunta>

        <Pergunta>
          <label>
            10. A sala de aula era um ambiente acolhedor e inclusivo?
          </label>
          <Resposta
            value={respostas.global}
            onChange={(e) => handleRespostaChange('global', e.target.value)}
            required
          >
            <option value="">Selecione</option>
            <option value="1">1 - Muito Fraco</option>
            <option value="2">2 - Fraco</option>
            <option value="3">3 - Regular</option>
            <option value="4">4 - Bom</option>
            <option value="5">5 - Excelente</option>
          </Resposta>
        </Pergunta>

        {/* Comentários adicionais */}
        <Pergunta>
          <label>
            11. Que sugestões você tem para melhorias no curso ou na abordagem do professor?
          </label>
          <Comentario
            value={respostas.sugestoes}
            onChange={(e) => handleRespostaChange('sugestoes', e.target.value)}
          />
        </Pergunta>

        {/* Botão de Envio */}
        <Botao type="submit">Enviar Avaliação</Botao>
      </form>
    </FormContainer>
  );
};

export default AvaliacaoProfessor;
