import { Query } from "react-apollo";
import { gql } from 'apollo-boost';
import * as React from 'react';
class ExchangeRates extends React.Component {
  render(){
    return <Query
      query={gql`
        {
          rates(currency: "USD") {
            currency
            rate
          }
        }
      `}
    >
      {
        ({loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error :(</p>;

          return data.rates.map(({ currency, rate }) => (
            <div key={currency}>
              <p>{currency}: {rate}</p>
            </div>
          ));
        }
      }
    </Query>
  }
}
export default ExchangeRates;