import React from 'react'
import styled from 'styled-components'

const Content = styled.footer`
  color: ${props => props.theme.colors.secondary};
  text-align: center;
  font-size: 0.9rem;
  padding-top: 3rem;
  padding-bottom: 3rem;
  background: ${props => props.theme.colors.bg};
`

const Footer = () => (
  <Content>
    <h5>
      Copyright &copy; 2018-2019 Galin Yanev.
      <br />
      Built by Georgi Yanev. Dedicated to Sofi and little Anton{' '}
      <span role="img" aria-label="heart">
        ❤️
      </span>
      <br />
      Based on the{' '}
      <a
        href="https://emilia.lekoarts.de/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Emilia
      </a>{' '}
      theme by LekoArts.
    </h5>
  </Content>
)

export default Footer
