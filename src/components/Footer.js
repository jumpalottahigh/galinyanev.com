import React from 'react'
import styled from 'styled-components'

const Content = styled.footer`
  color: ${props => props.theme.colors.secondary};
  padding: 0 ${props => props.theme.contentPadding};
  text-align: center;
`

const Footer = () => (
  <Content>
    <h5>
      Copyright &copy; 2018 Georgi Yanev.
      <br />Dedicated to Sofi and little Anton{' '}
      <span role="img" aria-label="heart">
        ❤️
      </span>
    </h5>
  </Content>
)

export default Footer
