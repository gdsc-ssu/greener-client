import styled from '@emotion/native';

export const Container = styled.View({
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: 176,
});

export const Week = styled.View({
  flexDirection: 'row',
  justifyContent: 'space-between',
});

interface EmptyProps {
  size: number;
}

export const Empty = styled.View<EmptyProps>(({ size }) => ({
  width: size,
  height: size,
}));
