import React, { ReactNode } from 'react';
import { RenderSeedProps } from '../brackets';
import { RoundTitle } from '../components/round';
import { Seed, SeedItem, SeedTeam, SeedTime } from '../components/seed';

/* ------------------------- default title component ------------------------ */
export const renderTitle = (title: ReactNode) => <RoundTitle>{title}</RoundTitle>;

/* ------------------------- default seed component ------------------------- */
export const renderSeed = ({ seed, breakpoint }: RenderSeedProps) => {
  return (
    <Seed mobileBreakpoint={breakpoint}>
      <SeedItem>
        <div>
          <SeedTeam isAdvancing={seed.teams?.[0]?.isAdvancing}>{seed.teams?.[0]?.name || '-----------'}</SeedTeam>
          <SeedTeam isAdvancing={seed.teams?.[0]?.isAdvancing}>{seed.teams?.[1]?.name || '-----------'}</SeedTeam>
        </div>
      </SeedItem>
      <SeedTime mobileBreakpoint={breakpoint}>{seed.date}</SeedTime>
    </Seed>
  );
};
