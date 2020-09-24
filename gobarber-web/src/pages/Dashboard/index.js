import React from 'react';
import api from '~/services/api'

import { MdChevronLeft, MdChevronRight } from 'react-icons/md'

import { Container, Time } from './styles';

function Dashboard() {
  return <Container>
    <header>
      <button type="button">
        <MdChevronLeft size={36} color="#FFF" />
      </button>
      <strong>31 de maio</strong>
      <button type="button">
        <MdChevronRight size={36} color="#FFF" />
      </button>
    </header>

    <ul>
      <Time past>
        <strong>8:00</strong>
        <span>JACA LIMNTA</span>
      </Time>
      <Time available>
        <strong>09:00</strong>
        <span>Em aberto</span>
      </Time>
      <Time>
        <strong>10:00</strong>
        <span>JACA LIMNTA</span>
      </Time>
      <Time>
        <strong>11:00</strong>
        <span>JACA LIMNTA</span>
      </Time>
    </ul>
  </Container>;
}

export default Dashboard;