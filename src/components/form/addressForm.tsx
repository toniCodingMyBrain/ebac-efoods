import { AddressContainer, RowBlock } from "./style";

export const StepAddressForm = () => {
  return (
    <AddressContainer>
      <h4>Entrega</h4>
      <form>
        <div>
          <RowBlock inputType="normal">
            <label htmlFor="fullName">Quem irá receber</label>
            <input id="fullName" type="text" />
          </RowBlock>
          <RowBlock inputType="normal">
            <label htmlFor="address">Endereço</label>
            <input id="address" type="text" />
          </RowBlock>
          <RowBlock inputType="normal">
            <label htmlFor="city">Cidade</label>
            <input id="city" type="text" />
          </RowBlock>
          <RowBlock inputType="double">
            <div className="fields">
              <label htmlFor="cep">CEP</label>
              <input id="cep" type="text" />
            </div>
            <div className="fields">
              <label htmlFor="number">Número</label>
              <input id="number" type="text" />
            </div>
          </RowBlock>
          <RowBlock inputType="normal">
            <label htmlFor="description">Complemento</label>
            <input id="description" type="text" />
          </RowBlock>
        </div>
      </form>
    </AddressContainer>
  );
};
