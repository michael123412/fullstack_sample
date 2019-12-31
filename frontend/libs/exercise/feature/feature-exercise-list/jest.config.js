module.exports = {
  name: 'exercise-list',
  preset: '../../../../jest.config.js',
  coverageDirectory:
    '../../../../coverage/libs/exercise/feature/feature-exercise-list',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
